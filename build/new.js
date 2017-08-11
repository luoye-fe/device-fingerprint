const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');

let template =
`/*
 {{name}}
 */
const key = '{{name}}';

function is{{name}}() {

}

function get{{name}}() {

}

export default {
	key,
	is{{name}},
	get{{name}}
};
`;

function blue(str) {
	return '\x1b[1m\x1b[34m' + str + '\x1b[39m\x1b[22m';
};

function wirteFile(filePath, data) {
	return new Promise((resolve, reject) => {
		fs.writeFile(filePath, data, (err, data) => {
			resolve();
		})
	})
}

inquirer
	.prompt([{
		type: 'input',
		name: 'name',
		message: 'new quota name(split with ",")'

	}])
	.then(function(answers) {
		if (!answers.name) return console.log(blue('\nname is required!!!'));
		let promiseArray = [];

		answers.name.split(',').forEach(item => {
			promiseArray.push(wirteFile(path.join(__dirname, '../src/quota/' + item + '.js'), template.replace(/{{name}}/g, item)));
		})

		Promise.all(promiseArray)
			.then(() => {
				console.log(blue('create new quota file success.'))
			})
	});
