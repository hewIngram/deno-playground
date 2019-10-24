const bodyParser = (body => {
    var str = "";
	for (var i = 0; i < body.length; i++) {
		str += String.fromCharCode(parseInt(body[i]));
	}
    return JSON.parse(str)
})

const regexpCount = (regexp, text) => {
  return ((text || '').match(regexp) || []).length
}

export {
    bodyParser,
    regexpCount
}