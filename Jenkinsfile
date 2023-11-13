pipeline{
    agent any
    tools {nodejs "Node"}
    stages {
        stage('Clone Repository'){
            steps{
                git branch: 'main',
                    url: 'https://github.com/ThyagoLucas/av-jenkinsGC.git'
            }
        }
        
        stage('Instalando dependencias'){
            steps {
                bat 'npm install'
            }
        }
        stage('Rodando Testes'){
            steps {
                bat 'npm run test'
            }
        }
        stage('Rodando lint'){
            steps {
                bat 'npm run lint'
            }
        }
         stage('Rodando build'){
            steps {
                bat 'npm run build'
            }
        }
        
        stage('Deploy'){
            steps {
                bat 'pm2 startOrRestart pm2.config.json'
            }
        }
    }
}