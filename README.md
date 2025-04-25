# Astro Tech BLC

Aplicação web para monitoramento astronômico.

## Estrutura do Projeto

```
src/
├── app.py                 # Aplicação Flask principal
├── static/               # Arquivos estáticos
│   ├── css/
│   │   └── style.css    # Estilos CSS
│   ├── js/
│   │   └── main.js      # JavaScript principal
│   └── images/          # Imagens e recursos
├── templates/           # Templates HTML
│   ├── astro-monitor.html
│   └── login.html
└── requirements.txt     # Dependências Python
```

## Requisitos

- Python 3.8 ou superior
- Flask
- Navegador web moderno com suporte a JavaScript

## Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/astro-tech-blc.git
cd astro-tech-blc
```

2. Instale as dependências:
```bash
pip install -r requirements.txt
```

## Como rodar localmente

1. Certifique-se de ter o Node.js instalado em seu computador
2. Abra o terminal na pasta do projeto
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Inicie o servidor:
   ```bash
   npm start
   ```
5. Acesse o site em seu navegador:
   ```
   http://localhost:3000
   ```

## Funcionalidades

- Visualização do céu noturno
- Fases da lua
- Informações climáticas
- Rastreamento de satélites
- Dados da galáxia
- Sistema solar em 3D

## Tecnologias Utilizadas

- Flask (Backend)
- HTML5, CSS3, JavaScript (Frontend)
- A-Frame (Visualização 3D)
- API Open-Meteo (Dados astronômicos)

## Contribuindo

1. Faça um Fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.