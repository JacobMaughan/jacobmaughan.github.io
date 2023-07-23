let sheet_id = '1L0mPMkaarKGy_WHrdD49TvBV82xb1SCOwsWnRKotN3Y'

function get_recent_posts() {
	let sheet_title = 'blog_main';
	let sheet_range = 'A2:D5';
	
	let url = 'https://docs.google.com/spreadsheets/d/' + sheet_id + '/gviz/tq?sheet=' + sheet_title + '&range=' + sheet_range
	
	fetch(url)
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

function get_about() {
	let sheet_title = 'blog_about';
	let sheet_range = 'A2:A2';
	
	let url = 'https://docs.google.com/spreadsheets/d/' + sheet_id + '/gviz/tq?sheet=' + sheet_title + '&range=' + sheet_range
	
	fetch(url)
	.then(res => res.text())
	.then(rep => {
		let data = JSON.parse(rep.substr(47).slice(0, -2));
		
		document.getElementById('about_body').innerHTML = data.table.rows[0].c[0].v;
	})
}

function get_posts() {
	let sheet_title = 'blog_main';
	let sheet_range = 'A2:D50';
	
	let url = 'https://docs.google.com/spreadsheets/d/' + sheet_id + '/gviz/tq?sheet=' + sheet_title + '&range=' + sheet_range
	
	fetch(url)
	.then(res => res.text())
	.then(rep => {
		let data = JSON.parse(rep.substr(47).slice(0, -2));
		
		let counter = 0;
		let rowDiv = 0;
		
		for(let i = data.table.rows.length - 1; i >= 0; i--) {
			if(counter == 0) {
				rowDiv = document.createElement('div');
				rowDiv.className = 'row';
				document.getElementById('posts_body').appendChild(rowDiv);
			}
			articleDiv = document.createElement('div');
			articleDiv.className = 'col-3 col-6-medium col-12-small';
			articleDiv.innerHTML = "<section class=\'box feature\'> <a href=\'article?id=" + data.table.rows[i].c[0].v + "\' class=\'image featured\'><img src=\'" + data.table.rows[i].c[2].v + "\'/></a> <h3><a href=\'article?id=" + data.table.rows[i].c[0].v + "\'>" + data.table.rows[i].c[1].v + "</a></h3> <p>" + data.table.rows[i].c[3].v + "</p> </section>";
		
			rowDiv.appendChild(articleDiv);
			
			counter += 1;
			if(counter == 4) {counter = 0;}
		}
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
		
		let date = data.table.rows[0].c[2].v;
		
		document.title = 'Jacob Maughan - ' + data.table.rows[0].c[0].v;
		document.getElementById('article_title').innerHTML = data.table.rows[0].c[0].v;
		document.getElementById('article_headline').innerHTML = data.table.rows[0].c[1].v;
		document.getElementById('article_published_date').innerHTML = date.substr(9,3).replace(/,/g, '') + '/' + date.substr(date.length - 3, 2).replace(/,/g, '') + '/' + date.substr(5, 4);
		document.getElementById('article_body').innerHTML = data.table.rows[0].c[3].v;
		
	})
}