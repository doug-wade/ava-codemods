'use strict';

exports.renameAssertion = function (name, newName, j, ast) {
	ast.find(j.CallExpression, {
		callee: {
			object: {name: 't'},
			property: {name: name}
		}
	})
		.forEach(function (p) {
			p.get('callee').get('property').replace(j.identifier(newName));
		});
};
