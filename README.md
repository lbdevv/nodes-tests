# Proyecto Monorepo: Prueba Técnica

Este es un monorepo que incluye un backend y un frontend, diseñado como parte de una prueba técnica.

## Requisitos Previos

Asegúrate de tener instalado lo siguiente:

- [Node.js](https://nodejs.org/) (versión 20 o superior)
- [Docker](https://www.docker.com/get-started) (opcional, si deseas usar contenedores)
- [Docker Compose](https://docs.docker.com/compose/) 

## Configuración del Proyecto

### 1. Clonar el Repositorio

git clone https://github.com/[tu usuario]/nodes-tests.git

### Para ejecución directa con docker----------------------------------------------

[Ir a la carpeta raíz y ejecutar el siguiente comando]: 
docker-compose up --build  (Con esto debería bastar para poder ver el proyecto e interacturar con él)

### Para ejecución manual----------------------------------------------------------

### 2. Ir tanto a la carpeta de nodos-test-back y nodos-test e instalar las dependencias 
npm install

### 3. Para correr el proyecto en ambos casos se utiliza el siguiente comando (importante ejecutar primero el backend que está en la carpeta nodos-test-back):
npm run dev

Al iniciar se verá algo así -> (Al clickear los nodos se despliega el total).
![image](https://github.com/user-attachments/assets/2348ccc6-c0cb-4c4d-89e0-2fe3955de049)










