let sheet_id = '1L0mPMkaarKGy_WHrdD49TvBV82xb1SCOwsWnRKotN3Y'

function get_posts() {
	let sheet_title = 'blog_main';
	let sheet_range = 'A2:D50';
	
	let url = 'http://docs.google.com/spreadsheets/d/' + sheet_id + '/gviz/tq?sheet=' + sheet_title + '&range=' + sheet_range
	
	fetch(FULL_URL)
	.then(res => res.text())
	.then(rep => {
		let data = JSON.parse(rep.substr(47).slice(0, -2));
	})
}

function get_article(page_id) {
	console.log('test');
	let sheet_title = 'page_id';
	let sheet_range = 'A2:D2';
	
	let url = 'https://docs.google.com/spreadsheets/d/' + sheet_id + '/gviz/tq?sheet=' + sheet_title + '&range=' + sheet_range
	
	fetch(url)
	.then(res => res.text())
	.then(rep => {
		let data = JSON.parse(rep.substr(47).slice(0, -2));
		console.log(data);
		
		document.title = 'Jacob Maughan - ' + data.table.rows[0].c[1].v;
	})
}