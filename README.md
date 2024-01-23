# Alfredo Martinez - Portfolio Website (Nuxt 3) 🚀

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install
```

## SSL Certificate

First, install [mkcert](https://github.com/FiloSottile/mkcert?tab=readme-ov-file#installation). Then generate an SSL certificate for alfredom.test.dev:

```bash
mkdir certificates
cd certificates
mkcert alfredom.test.dev
```

Add the hostname to your `/etc/hosts` file:

```bash
sudo echo "127.0.0.1 alfredom.test.dev" || sudo tee -a /etc/hosts
```

## Development Server

Start the development server on `https://alfredom.test.dev:3000`:

```bash
yarn dev
```
