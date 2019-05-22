
class Questions{
    constructor(_questionire){
        this.connection = _questionire.getConnection();
        const questionsManager = require('./index.json')
        this.questionManagerContract = this.connection.eth.contract(questionsManager.abi);
        this.questionManagerContract = this.questionManagerContract.at(questionsManager.address);
        this.to = questionsManager.address;
    }

    addQuestion(questionData, from, options){
        const Promise = new Promise((resolve, reject)=>{
            const that = this;
            this.questionManagerContract.addQuestion.estimateGas(questionData, from, options, function(error, _gas){
                if(error){
                    return reject(error);
                }  
                _gas = parseInt(_gas*1.3);
                options.gas = _gas;
                options.to = that.to;

                that.questionManagerContract.addQuestion(questionData, from, options, function(error, data){
                    if(error){
                        return reject(error);
                    }
                    resolve(data)
                })
            })
        });
        return promise;
    }
}

module.exports = Questions;