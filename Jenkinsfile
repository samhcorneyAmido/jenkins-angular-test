pipeline {
  agent {
      docker { image 'samhcorneyamido/node-with-chrome' }
  }
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
        stage('E2E') {
            steps {
                sh 'npm run e2e -- --config=protractor-ci.conf.js'
            }
        }
        stage('Lint') {
          steps {
              sh 'npm run lint'
          }
        }
        stage('Build') {
          steps {
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
            echo "Deploying..."
          }
        }
    }
}
