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
        stage('Lint') {
            sh 'npm run lint'
        }
        stage('Build') {
            milestone()
            sh 'npm run build --prod --aot --sm --progress=false'
        }
        stage('Archive') {
            sh 'tar -cvzf dist.tar.gz --strip-components=1 dist'
            archive 'dist.tar.gz'
        }

        stage('Deploy') {
            milestone()
            echo "Deploying..."
        }
    }
}
