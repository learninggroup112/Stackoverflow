const web3 = require('web3');
// const web3 = new Web3.providers.HttpProvider("127.0.0.1:8545");
const questionsManager = require('../blockchain/questions/index.json')

console.log(web3.eth)
var abi = questionsManager.abi;
var contractAddress = questionsManager.address;

// const myContract = web3.eth.contract(abi);
// var contractInstance = myContract.at(contractAddress); 

var contractInstance = new web3.eth.contract(abi, contractAddress);


function submit(uname, email, password){
	register(uname, email, password);
}

function register(uname, email, password){
	contractInstance.registerUser(
		uname, email, password,
		{
            gas: 300000,
            from: "0x547b94ba53fac3731c03e22e5636e2857c6aa87a"
         },
    	(err, result) => {
			if(result != null){
				let text = "User "+uname+" registered successfully on Blockchain.";
				alert(text)
			}
			else{
				alert(uname);
			}
		}
	)
}

export {submit}