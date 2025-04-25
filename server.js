const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const port = 3000;

// Configurar CORS
app.use(cors());

// Configurar compressão
app.use(express.static(__dirname, {
    setHeaders: (res, path) => {
        if (path.endsWith('.html')) {
            res.setHeader('Content-Type', 'text/html');
        } else if (path.endsWith('.js')) {
            res.setHeader('Content-Type', 'application/javascript');
        } else if (path.endsWith('.css')) {
            res.setHeader('Content-Type', 'text/css');
        }
    }
}));

// Rota principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'astro-monitor.html'));
});

// Rota para a API do Open-Meteo (proxy)
app.get('/api/forecast', async (req, res) => {
    try {
        const { latitude, longitude } = req.query;
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=auto`);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar dados da API' });
    }
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
    console.log('Pressione Ctrl+C para encerrar o servidor');
}); 