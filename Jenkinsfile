pipeline {
    agent any
    tools {nodejs "Node"}
    stages {
        stage('Clone Repository'){
            steps{
                script {
                    checkout([$class: 'GitSCM', branches: [[name: 'main']], userRemoteConfigs: [[url: 'https://github.com/ThyagoLucas/av-jenkinsGC.git']]])
                }
            }
        }
        stage('Instalando dependencias'){
            steps {
                sh 'npm install'
            }
        }
        stage('Rodando Testes'){
            steps {
                sh 'npm run test'
            }
        }
        stage('Rodando lint'){
            steps {
                sh 'npm run lint'
            }
        }
        stage('Gerando o build'){
            steps {
                sh 'npm run build'
            }
        }
        
    }
}
