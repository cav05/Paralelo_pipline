pipeline {
    agent any

    tools {nodejs "node"}

    stages {

        stage('Cypress Parallel Test Suite') {
            parallel {
                stage('Slave 1') {
                    agent {
                        label "Agent2_1"
                    }
                    steps {
                        git url: 'https://github.com/cav05/Paralelo_pipline.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run --record --key af985b2c-7323-4334-8db7-4e016cf8a4c4  --parallel'
                    
                    }
                }

                stage('Slave 2') {
                    agent {
                        label "Agent2_2"
                    }
                    steps {
                        git url: 'https://github.com/cav05/Paralelo_pipline.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run --record --key af985b2c-7323-4334-8db7-4e016cf8a4c4  --parallel'
                    
                    }
                }

                stage('Slave 3') {
                    agent {
                        label "Agent2_3"
                    }
                    steps {
                        git url: 'https://github.com/cav05/Paralelo_pipline.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run --record --key af985b2c-7323-4334-8db7-4e016cf8a4c4  --parallel'
                    
                    }
                }

                

               

                
   
                  
            }

             
        }

    }
            
}