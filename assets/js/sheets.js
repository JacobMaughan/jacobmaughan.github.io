let sheet_id = '1L0mPMkaarKGy_WHrdD49TvBV82xb1SCOwsWnRKotN3Y'

function get_recent_posts() {
	let sheet_title = 'blog_main';
	let sheet_range = 'A2:D5';
	
	let url = 'http://docs.google.com/spreadsheets/d/' + sheet_id + '/gviz/tq?sheet=' + sheet_title + '&range=' + sheet_range
	
	fetch(FULL_URL)
	.then(res => res.text())
	.then(rep => {
		let data = JSON.parse(rep.substr(47).slice(0, -2));
		
		document.getElementById('article1_mainlink').href = 'article?id=' + data.table.rows[0].c[0].v;
		document.getElementById('article1_title').href = 'article?id=' + data.table.rows[0].c[0].v;
		document.getElementById('article1_title').innerHTML = data.table.rows[0].c[1].v;
		document.getElementById('article1_heading').innerHTML = data.table.rows[0].c[3].v;
		document.getElementById('article1_image').src = data.table.rows[0].c[2].v;
		
		document.getElementById('article2_mainlink').href = 'article?id=' + data.table.rows[1].c[0].v;
		document.getElementById('article2_title').href = 'article?id=' + data.table.rows[1].c[0].v;
		document.getElementById('article2_title').innerHTML = data.table.rows[1].c[1].v;
		document.getElementById('article2_heading').innerHTML = data.table.rows[1].c[3].v;
		document.getElementById('article2_image').src = data.table.rows[1].c[2].v;
		
		document.getElementById('article3_mainlink').href = 'article?id=' + data.table.rows[2].c[0].v;
		document.getElementById('article3_title').href = 'article?id=' + data.table.rows[2].c[0].v;
		document.getElementById('article3_title').innerHTML = data.table.rows[2].c[1].v;
		document.getElementById('article3_heading').innerHTML = data.table.rows[2].c[3].v;
		document.getElementById('article3_image').src = data.table.rows[2].c[2].v;
		
		document.getElementById('article4_mainlink').href = 'article?id=' + data.table.rows[3].c[0].v;
		document.getElementById('article4_title').href = 'article?id=' + data.table.rows[3].c[0].v;
		document.getElementById('article4_title').innerHTML = data.table.rows[3].c[1].v;
		document.getElementById('article4_heading').innerHTML = data.table.rows[3].c[3].v;
		document.getElementById('article4_image').src = data.table.rows[3].c[2].v;
	})
}

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
	let sheet_title = page_id;
	let sheet_range = 'A2:D2';
	
	let url = 'https://docs.google.com/spreadsheets/d/' + sheet_id + '/gviz/tq?sheet=' + sheet_title + '&range=' + sheet_range
	
	fetch(url)
	.then(res => res.text())
	.then(rep => {
		let data = JSON.parse(rep.substr(47).slice(0, -2));
		
		date = data.table.rows[0].c[2].v;
		
		document.title = 'Jacob Maughan - ' + data.table.rows[0].c[0].v;
		document.getElementById('article_title').innerHTML = data.table.rows[0].c[0].v;
		document.getElementById('article_headline').innerHTML = data.table.rows[0].c[1].v;
		document.getElementById('article_published_date').innerHTML = date.substr(9,3).replace(/,/g, '') + '/' + date.substr(date.length - 3, 2).replace(/,/g, '') + '/' + date.substr(5, 4);
		document.getElementById('article_body').innerHTML = data.table.rows[0].c[3].v;
		
	})
}