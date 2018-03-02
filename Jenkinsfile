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
          steps {
              sh 'npm run lint'
          }
        }
        stage('Build') {
          steps {
            milestone()
            sh 'npm run build --prod --aot --sm --progress=false'
          }
        }
        stage('Archive') {
          steps {
            sh 'tar -cvzf dist.tar.gz --strip-components=1 dist'
            archive 'dist.tar.gz'
          }
        }

        stage('Deploy') {
          steps {
            milestone()
            echo "Deploying..."
          }
        }
    }
}
