pipeline {
    agent { dockerfile true }
    stages {
        stage('Install') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'npm run test -- --single-run --no-progress --browser=ChromeHeadlessNoSandbox'
            }
        }
    }
}
