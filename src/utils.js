const parseLink = (link) => {
	const match = link.match(/^(https?\:)\/\/(([^:\/?#]*)(?:\:([0-9]+))?)([\/]{0,1}[^?#]*)(\?[^#]*|)(#.*|)$/)
	return match ? match[2] : 'link'
}

export default { parseLink }