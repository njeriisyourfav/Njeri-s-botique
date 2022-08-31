const data = new FormData();
data.append("file", );

const options = {
	method: 'POST',
	headers: {
		'X-RapidAPI-Key': '61d56c24e3msh55ad1b45cd7b875p17f595jsn9c18b630d884',
		'X-RapidAPI-Host': 'fashion-classification.p.rapidapi.com'
	},
	body: data
};

fetch('https://fashion-classification.p.rapidapi.com/predictAll', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));