# Astro Tech BLC

Aplicação web para visualização de dados astronômicos e fases da lua.

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

## Executando a Aplicação

1. Inicie o servidor Flask:
```bash
python src/app.py
```

2. Acesse a aplicação no navegador:
```
http://localhost:5000
```

3. Faça login com as credenciais:
- Usuário: admin
- Senha: admin123

## Funcionalidades

- Visualização de fases da lua
- Mapa estelar interativo
- Geolocalização automática
- Interface responsiva
- Sistema de login seguro

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