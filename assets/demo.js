(() => {
	'use strict';

	const STORAGE_KEY = 'library-desk-pages-demo-v1';
	const seedData = {
		authors: [
			{ id: 1, name: 'Chinua Achebe', country: 'Nigeria' },
			{ id: 2, name: 'Chimamanda Ngozi Adichie', country: 'Nigeria' },
			{ id: 3, name: 'Ngugi wa Thiong’o', country: 'Kenya' },
			{ id: 4, name: 'Okot p’Bitek', country: 'Uganda' },
			{ id: 5, name: 'Robert C. Martin', country: 'United States' },
			{ id: 6, name: 'Andrew S. Tanenbaum', country: 'Netherlands' },
			{ id: 7, name: 'Stephen Hawking', country: 'United Kingdom' },
			{ id: 8, name: 'Yuval Noah Harari', country: 'Israel' }
		],
		categories: [
			{ id: 1, name: 'Fiction', description: 'Imaginary stories, novels and poetry' },
			{ id: 2, name: 'Education', description: 'Textbooks for learning and studying' },
			{ id: 3, name: 'Technology', description: 'Computing, programming and engineering' },
			{ id: 4, name: 'Science', description: 'Scientific knowledge and discoveries' },
			{ id: 5, name: 'History', description: 'Historical events and accounts' }
		],
		books: [
			{ id: 1, isbn: '9780385474542', title: 'Things Fall Apart', authorId: 1, categoryId: 1, publisher: 'Heinemann', year: 1958, totalCopies: 5, availableCopies: 4 },
			{ id: 2, isbn: '9780007200283', title: 'Half of a Yellow Sun', authorId: 2, categoryId: 1, publisher: 'Fourth Estate', year: 2006, totalCopies: 4, availableCopies: 3 },
			{ id: 3, isbn: '9789966466100', title: 'The River Between', authorId: 3, categoryId: 1, publisher: 'Heinemann', year: 1965, totalCopies: 5, availableCopies: 4 },
			{ id: 4, isbn: '9789966250001', title: 'Song of Lawino', authorId: 4, categoryId: 1, publisher: 'East African Publishing House', year: 1966, totalCopies: 3, availableCopies: 3 },
			{ id: 5, isbn: '9780132350884', title: 'Clean Code', authorId: 5, categoryId: 3, publisher: 'Prentice Hall', year: 2008, totalCopies: 5, availableCopies: 4 },
			{ id: 6, isbn: '9780133591620', title: 'Modern Operating Systems', authorId: 6, categoryId: 3, publisher: 'Pearson', year: 2014, totalCopies: 4, availableCopies: 4 },
			{ id: 7, isbn: '9780132126953', title: 'Computer Networks', authorId: 6, categoryId: 2, publisher: 'Pearson', year: 2010, totalCopies: 4, availableCopies: 4 },
			{ id: 8, isbn: '9780553380163', title: 'A Brief History of Time', authorId: 7, categoryId: 4, publisher: 'Bantam Books', year: 1988, totalCopies: 5, availableCopies: 4 },
			{ id: 9, isbn: '9780062316110', title: 'Sapiens', authorId: 8, categoryId: 5, publisher: 'Harper', year: 2015, totalCopies: 4, availableCopies: 3 },
			{ id: 10, isbn: '9780385474559', title: 'No Longer at Ease', authorId: 1, categoryId: 1, publisher: 'Heinemann', year: 1960, totalCopies: 3, availableCopies: 3 }
		],
		members: [
			{ id: 1, memberNumber: 'MEM001', fullName: 'Aisha Nabirye', email: 'aisha@gmail.com', phone: '0701000001', status: 'active', dateJoined: '2003-06-02' },
			{ id: 2, memberNumber: 'MEM002', fullName: 'Brian Mukasa', email: 'brian@gmail.com', phone: '0701000002', status: 'active', dateJoined: '2020-05-05' },
			{ id: 3, memberNumber: 'MEM003', fullName: 'Catherine Auma', email: 'catherine@gmail.com', phone: '0701000003', status: 'active', dateJoined: '2004-07-06' },
			{ id: 4, memberNumber: 'MEM004', fullName: 'Daniel Ssekandi', email: 'daniel@gmail.com', phone: '0701000004', status: 'active', dateJoined: '2008-06-28' },
			{ id: 5, memberNumber: 'MEM005', fullName: 'Faith Nankya', email: 'faith@gmail.com', phone: '0701000005', status: 'active', dateJoined: '2023-01-05' },
			{ id: 6, memberNumber: 'MEM006', fullName: 'Isaac Opio', email: 'isaac@gmail.com', phone: '0701000006', status: 'active', dateJoined: '2025-12-26' },
			{ id: 7, memberNumber: 'MEM007', fullName: 'Joan Tumwebaze', email: 'joan@gmail.com', phone: '0701000007', status: 'active', dateJoined: '2009-08-29' },
			{ id: 8, memberNumber: 'MEM008', fullName: 'Kevin Byaruhanga', email: 'kevin@gmail.com', phone: '0701000008', status: 'active', dateJoined: '2015-09-03' },
			{ id: 9, memberNumber: 'MEM009', fullName: 'Lydia Namatovu', email: 'lydia@gmail.com', phone: '0701000009', status: 'suspended', dateJoined: '2011-03-04' },
			{ id: 10, memberNumber: 'MEM010', fullName: 'Moses Lubega', email: 'moses@gmail.com', phone: '0701000010', status: 'active', dateJoined: '2014-04-12' }
		],
		loans: [
			{ id: 1, memberId: 1, bookId: 1, issued: '2026-10-12', due: '2026-10-26', returned: '' },
			{ id: 2, memberId: 2, bookId: 3, issued: '2026-10-20', due: '2026-11-03', returned: '' },
			{ id: 3, memberId: 3, bookId: 5, issued: '2026-10-28', due: '2026-11-11', returned: '' },
			{ id: 4, memberId: 4, bookId: 8, issued: '2026-11-02', due: '2026-11-16', returned: '' },
			{ id: 5, memberId: 5, bookId: 2, issued: '2026-11-04', due: '2026-11-18', returned: '' },
			{ id: 6, memberId: 6, bookId: 9, issued: '2026-10-30', due: '2026-11-13', returned: '' },
			{ id: 7, memberId: 7, bookId: 4, issued: '2026-09-02', due: '2026-09-16', returned: '2026-09-14' },
			{ id: 8, memberId: 8, bookId: 6, issued: '2026-09-10', due: '2026-09-24', returned: '2026-09-26' },
			{ id: 9, memberId: 1, bookId: 7, issued: '2026-09-15', due: '2026-09-29', returned: '2026-09-28' },
			{ id: 10, memberId: 9, bookId: 10, issued: '2026-08-20', due: '2026-09-03', returned: '2026-09-01' },
			{ id: 11, memberId: 10, bookId: 1, issued: '2026-10-01', due: '2026-10-15', returned: '2026-10-13' },
			{ id: 12, memberId: 3, bookId: 8, issued: '2026-10-05', due: '2026-10-19', returned: '2026-10-17' }
		]
	};

	const content = document.querySelector('#app-content');
	const dialog = document.querySelector('#record-dialog');
	const form = document.querySelector('#record-form');
	const fieldsContainer = document.querySelector('#dialog-fields');
	const formError = document.querySelector('#form-error');
	const announcer = document.querySelector('#announcer');
	let notice = '';
	let storageWarning = '';
	let activeForm = null;
	let data = loadData();

	function clone(value) {
		return JSON.parse(JSON.stringify(value));
	}

	function validData(value) {
		return value && ['authors', 'categories', 'books', 'members', 'loans']
			.every((key) => Array.isArray(value[key]));
	}

	function loadData() {
		try {
			const saved = localStorage.getItem(STORAGE_KEY);
			if (saved === null) {
				return clone(seedData);
			}
			const parsed = JSON.parse(saved);
			if (!validData(parsed)) {
				throw new TypeError('Saved demo data has an unexpected format.');
			}
			return parsed;
		} catch (error) {
			console.error('Unable to load saved Library Desk demo data.', error);
			storageWarning = 'Saved browser data could not be read. The sample data is shown; reset or edit it to start a fresh copy.';
			return clone(seedData);
		}
	}

	function saveData() {
		try {
			localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
			storageWarning = '';
			return true;
		} catch (error) {
			console.error('Unable to save Library Desk demo data.', error);
			storageWarning = 'This browser could not save changes. Your edits may be lost when you leave this page.';
			return false;
		}
	}

	function escapeHtml(value) {
		return String(value ?? '').replace(/[&<>"']/g, (character) => ({
			'&': '&amp;',
			'<': '&lt;',
			'>': '&gt;',
			'"': '&quot;',
			"'": '&#39;'
		})[character]);
	}

	function today() {
		return new Date().toISOString().slice(0, 10);
	}

	function dateAfter(days) {
		const date = new Date();
		date.setDate(date.getDate() + days);
		return date.toISOString().slice(0, 10);
	}

	function dateLabel(value) {
		if (!value) {
			return '—';
		}
		const date = new Date(`${value}T00:00:00`);
		return Number.isNaN(date.getTime())
			? escapeHtml(value)
			: new Intl.DateTimeFormat(undefined, { year: 'numeric', month: 'short', day: 'numeric' }).format(date);
	}

	function getById(collection, id) {
		return collection.find((record) => record.id === Number(id));
	}

	function authorName(id) {
		return getById(data.authors, id)?.name || 'Unknown author';
	}

	function categoryName(id) {
		return getById(data.categories, id)?.name || 'Unknown category';
	}

	function bookName(id) {
		return getById(data.books, id)?.title || 'Unknown book';
	}

	function memberName(id) {
		return getById(data.members, id)?.fullName || 'Unknown member';
	}

	function nextId(collection) {
		return collection.reduce((highest, record) => Math.max(highest, Number(record.id) || 0), 0) + 1;
	}

	function banner() {
		const message = storageWarning
			? `<strong>Storage notice</strong><span>${escapeHtml(storageWarning)}</span>`
			: '<strong>Demo mode</strong><span>This is a sample app. Changes are saved only in this browser and are not shared with other people or devices.</span>';
		return `<div class="demo-banner${storageWarning ? ' demo-banner-warning' : ''}" role="status">${message}</div>`;
	}

	function pageHeading(eyebrow, title, description, button = '') {
		return `<div class="page-heading">
			<div><p class="eyebrow">${escapeHtml(eyebrow)}</p><h1>${escapeHtml(title)}</h1><p class="muted">${escapeHtml(description)}</p></div>
			${button}
		</div>`;
	}

	function stat(label, value, detail, color) {
		return `<article class="stat stat-${color}"><span>${escapeHtml(label)}</span><strong>${escapeHtml(value)}</strong><small>${escapeHtml(detail)}</small></article>`;
	}

	function actionButtons(type, id, canDelete = true) {
		return `<div class="row-actions">
			<button type="button" data-edit="${type}" data-id="${id}">Edit</button>
			${canDelete ? `<button class="action-danger" type="button" data-delete="${type}" data-id="${id}">Delete</button>` : ''}
		</div>`;
	}

	function emptyRow(columns, message) {
		return `<tr data-empty-row><td class="empty-state" colspan="${columns}">${escapeHtml(message)}</td></tr>`;
	}

	function tableSection(title, count, headers, rows, emptyMessage) {
		const body = rows.length ? rows.join('') : emptyRow(headers.length, emptyMessage);
		return `<section class="content-section">
			<div class="section-heading"><div><p class="eyebrow">RECORDS</p><h2>${escapeHtml(title)}</h2></div><span class="table-count" data-count>${count} ${count === 1 ? 'record' : 'records'}</span></div>
			<div class="table-wrap"><table data-filter-table><thead><tr>${headers.map((header) => `<th scope="col">${escapeHtml(header)}</th>`).join('')}</tr></thead><tbody>${body}</tbody></table></div>
		</section>`;
	}

	function loanStatus(loan) {
		if (loan.returned) {
			return { label: 'Returned', className: 'status-done' };
		}
		if (loan.due < today()) {
			return { label: 'Overdue', className: 'status-overdue' };
		}
		return { label: 'On loan', className: 'status-open' };
	}

	function loanRow(loan, withActions) {
		const status = loanStatus(loan);
		const action = withActions && !loan.returned
			? `<button type="button" data-return="${loan.id}">Return</button>`
			: '<span class="muted">—</span>';
		return `<tr data-search-row>
			<td class="primary-cell">${escapeHtml(bookName(loan.bookId))}</td>
			<td>${escapeHtml(memberName(loan.memberId))}</td>
			<td>${dateLabel(loan.issued)}</td>
			<td>${dateLabel(loan.due)}</td>
			<td><span class="status ${status.className}">${status.label}</span></td>
			<td>${action}</td>
		</tr>`;
	}

	function renderDashboard() {
		const activeLoans = data.loans.filter((loan) => !loan.returned);
		const overdue = activeLoans.filter((loan) => loan.due < today()).length;
		const available = data.books.reduce((total, book) => total + Number(book.availableCopies || 0), 0);
		const recent = [...data.loans].sort((a, b) => b.issued.localeCompare(a.issued)).slice(0, 5);
		return `${pageHeading('LIBRARY OVERVIEW', 'Welcome to Library Desk', 'A quick view of your collection, members, and circulation activity.')}
			<div class="stats-grid">
				${stat('Book titles', data.books.length, `${available} copies currently available`, 'green')}
				${stat('Active members', data.members.filter((member) => member.status === 'active').length, `${data.members.length} members in total`, 'blue')}
				${stat('Books on loan', activeLoans.length, 'Currently checked out', 'orange')}
				${stat('Overdue loans', overdue, 'Require follow-up', 'orange')}
			</div>
			${tableSection('Recent loans', recent.length, ['Book', 'Member', 'Issued', 'Due date', 'Status', 'Action'], recent.map((loan) => loanRow(loan, false)), 'No loan activity yet.')}
			<div class="quick-links">
				<a href="#books"><span>Collection</span><strong>Browse books</strong></a>
				<a href="#members"><span>Community</span><strong>Manage members</strong></a>
				<a href="#loans"><span>Circulation</span><strong>Issue or return books</strong></a>
				<a href="#authors"><span>Catalog</span><strong>Authors and categories</strong></a>
			</div>`;
	}

	function renderBooks() {
		const rows = data.books.map((book) => `<tr data-search-row>
			<td><span class="book-title">${escapeHtml(book.title)}</span><span class="book-subtitle">ISBN ${escapeHtml(book.isbn)}</span></td>
			<td>${escapeHtml(authorName(book.authorId))}</td>
			<td>${escapeHtml(categoryName(book.categoryId))}</td>
			<td>${escapeHtml(book.publisher || '—')}</td>
			<td>${escapeHtml(book.year || '—')}</td>
			<td>${escapeHtml(book.availableCopies)} / ${escapeHtml(book.totalCopies)}</td>
			<td>${actionButtons('books', book.id, !data.loans.some((loan) => loan.bookId === book.id))}</td>
		</tr>`);
		return `${pageHeading('COLLECTION', 'Books', 'Browse and maintain the library collection.', '<button class="button button-primary" type="button" data-add="books">Add book</button>')}
			<div class="toolbar"><label class="search-form"><span class="sr-only">Search books</span><input type="search" data-table-search placeholder="Search title, author, ISBN..."></label><span class="table-count">${data.books.length} ${data.books.length === 1 ? 'book' : 'books'}</span></div>
			${tableSection('Book catalog', data.books.length, ['Title / ISBN', 'Author', 'Category', 'Publisher', 'Year', 'Available', 'Actions'], rows, 'No books found. Add a book to get started.')}`;
	}

	function renderMembers() {
		const rows = data.members.map((member) => `<tr data-search-row>
			<td class="primary-cell">${escapeHtml(member.fullName)}</td>
			<td>${escapeHtml(member.memberNumber)}</td>
			<td>${escapeHtml(member.email)}<span class="book-subtitle">${escapeHtml(member.phone || 'No phone')}</span></td>
			<td><span class="status ${member.status === 'active' ? 'status-done' : 'status-suspended'}">${escapeHtml(member.status)}</span></td>
			<td>${dateLabel(member.dateJoined)}</td>
			<td>${actionButtons('members', member.id, !data.loans.some((loan) => loan.memberId === member.id))}</td>
		</tr>`);
		return `${pageHeading('COMMUNITY', 'Members', 'Manage library memberships and contact details.', '<button class="button button-primary" type="button" data-add="members">Add member</button>')}
			<div class="toolbar"><label class="search-form"><span class="sr-only">Search members</span><input type="search" data-table-search placeholder="Search name, number, email..."></label><span class="table-count">${data.members.length} ${data.members.length === 1 ? 'member' : 'members'}</span></div>
			${tableSection('Member directory', data.members.length, ['Name', 'Member no.', 'Contact', 'Status', 'Joined', 'Actions'], rows, 'No members found. Add a member to get started.')}`;
	}

	function renderLoans() {
		const rows = [...data.loans]
			.sort((a, b) => b.issued.localeCompare(a.issued))
			.map((loan) => loanRow(loan, true));
		return `${pageHeading('CIRCULATION', 'Loans', 'Issue available books and record returns.', '<button class="button button-primary" type="button" data-add="loans">Issue a book</button>')}
			<div class="toolbar"><label class="search-form"><span class="sr-only">Search loans</span><input type="search" data-table-search placeholder="Search book or member..."></label><span class="table-count">${data.loans.length} ${data.loans.length === 1 ? 'loan' : 'loans'}</span></div>
			${tableSection('Loan register', data.loans.length, ['Book', 'Member', 'Issued', 'Due date', 'Status', 'Action'], rows, 'No loans found. Issue a book to get started.')}`;
	}

	function renderAuthors() {
		const rows = data.authors.map((author) => `<tr data-search-row>
			<td class="primary-cell">${escapeHtml(author.name)}</td>
			<td>${escapeHtml(author.country || '—')}</td>
			<td>${data.books.filter((book) => book.authorId === author.id).length}</td>
			<td>${actionButtons('authors', author.id, !data.books.some((book) => book.authorId === author.id))}</td>
		</tr>`);
		return `${pageHeading('CATALOG', 'Authors', 'Maintain the authors linked to your collection.', '<button class="button button-primary" type="button" data-add="authors">Add author</button>')}
			<div class="toolbar"><label class="search-form"><span class="sr-only">Search authors</span><input type="search" data-table-search placeholder="Search author or country..."></label><span class="table-count">${data.authors.length} ${data.authors.length === 1 ? 'author' : 'authors'}</span></div>
			${tableSection('Author directory', data.authors.length, ['Author', 'Country', 'Books', 'Actions'], rows, 'No authors found. Add an author to get started.')}`;
	}

	function renderCategories() {
		const rows = data.categories.map((category) => `<tr data-search-row>
			<td class="primary-cell">${escapeHtml(category.name)}</td>
			<td>${escapeHtml(category.description || '—')}</td>
			<td>${data.books.filter((book) => book.categoryId === category.id).length}</td>
			<td>${actionButtons('categories', category.id, !data.books.some((book) => book.categoryId === category.id))}</td>
		</tr>`);
		return `${pageHeading('CATALOG', 'Categories', 'Organize books into easy-to-browse subjects.', '<button class="button button-primary" type="button" data-add="categories">Add category</button>')}
			<div class="toolbar"><label class="search-form"><span class="sr-only">Search categories</span><input type="search" data-table-search placeholder="Search categories..."></label><span class="table-count">${data.categories.length} ${data.categories.length === 1 ? 'category' : 'categories'}</span></div>
			${tableSection('Category directory', data.categories.length, ['Category', 'Description', 'Books', 'Actions'], rows, 'No categories found. Add a category to get started.')}`;
	}

	const pages = {
		dashboard: renderDashboard,
		books: renderBooks,
		members: renderMembers,
		loans: renderLoans,
		authors: renderAuthors,
		categories: renderCategories
	};

	function currentPage() {
		const key = location.hash.slice(1);
		return Object.hasOwn(pages, key) ? key : 'dashboard';
	}

	function render() {
		const page = currentPage();
		document.querySelectorAll('[data-nav]').forEach((link) => {
			if (link.dataset.nav === page) {
				link.setAttribute('aria-current', 'page');
			} else {
				link.removeAttribute('aria-current');
			}
		});
		const message = notice ? `<div class="notice" role="status">${escapeHtml(notice)}</div>` : '';
		content.innerHTML = `${message}${banner()}${pages[page]()}`;
		document.querySelectorAll('[data-table-search]').forEach((input) => {
			input.addEventListener('input', () => filterTable(input));
		});
		if (notice) {
			announcer.textContent = notice;
			notice = '';
		}
	}

	function filterTable(input) {
		const table = input.closest('.toolbar')?.nextElementSibling?.querySelector('table');
		if (!table) {
			return;
		}
		const query = input.value.trim().toLocaleLowerCase();
		const rows = [...table.querySelectorAll('tbody tr[data-search-row]')];
		if (rows.length === 0) {
			return;
		}
		let visible = 0;
		rows.forEach((row) => {
			const matches = row.textContent.toLocaleLowerCase().includes(query);
			row.hidden = !matches;
			if (matches) {
				visible += 1;
			}
		});
		let empty = table.querySelector('[data-filter-empty]');
		if (!empty) {
			empty = document.createElement('tr');
			empty.dataset.filterEmpty = '';
			empty.innerHTML = `<td class="empty-state" colspan="${table.tHead.rows[0].cells.length}">No matching records.</td>`;
			table.tBodies[0].append(empty);
		}
		empty.hidden = visible > 0;
		const count = input.closest('.toolbar')?.querySelector('.table-count');
		if (count) {
			count.textContent = `${visible} ${visible === 1 ? 'match' : 'matches'}`;
		}
	}

	function selectOptions(records, selectedId, labelProperty) {
		return records.map((record) => `<option value="${record.id}"${record.id === Number(selectedId) ? ' selected' : ''}>${escapeHtml(record[labelProperty])}</option>`).join('');
	}

	function field(label, name, value, type = 'text', options = {}) {
		const required = options.required === false ? '' : ' required';
		const min = options.min !== undefined ? ` min="${escapeHtml(options.min)}"` : '';
		const max = options.max !== undefined ? ` max="${escapeHtml(options.max)}"` : '';
		const step = options.step ? ` step="${escapeHtml(options.step)}"` : '';
		let control;
		if (options.choices) {
			control = `<select name="${name}"${required}>${options.choices}</select>`;
		} else {
			control = `<input type="${type}" name="${name}" value="${escapeHtml(value ?? '')}"${required}${min}${max}${step}>`;
		}
		return `<label>${escapeHtml(label)}${control}</label>`;
	}

	function openForm(type, id = null) {
		const existing = id === null ? null : getById(data[type], id);
		if (id !== null && !existing) {
			showNotice('That record could not be found.');
			return;
		}
		activeForm = { type, id: existing?.id ?? null };
		form.reset();
		formError.hidden = true;
		formError.textContent = '';
		let title;
		let fields;

		if (type === 'books') {
			title = existing ? 'Edit book' : 'Add book';
			fields = [
				field('Title', 'title', existing?.title),
				field('ISBN', 'isbn', existing?.isbn),
				field('Author', 'authorId', '', 'text', { choices: `<option value="">Select an author</option>${selectOptions(data.authors, existing?.authorId, 'name')}` }),
				field('Category', 'categoryId', '', 'text', { choices: `<option value="">Select a category</option>${selectOptions(data.categories, existing?.categoryId, 'name')}` }),
				field('Publisher', 'publisher', existing?.publisher, 'text', { required: false }),
				field('Year published', 'year', existing?.year, 'number', { min: 0, max: 9999 }),
				field('Total copies', 'totalCopies', existing?.totalCopies ?? 1, 'number', { min: 1, step: 1 })
			].join('');
		} else if (type === 'members') {
			title = existing ? 'Edit member' : 'Add member';
			fields = [
				field('Full name', 'fullName', existing?.fullName),
				field('Member number', 'memberNumber', existing?.memberNumber),
				field('Email', 'email', existing?.email, 'email'),
				field('Phone', 'phone', existing?.phone, 'tel', { required: false }),
				field('Status', 'status', '', 'text', { choices: `<option value="active"${existing?.status === 'active' || !existing ? ' selected' : ''}>Active</option><option value="suspended"${existing?.status === 'suspended' ? ' selected' : ''}>Suspended</option>` }),
				field('Date joined', 'dateJoined', existing?.dateJoined || today(), 'date')
			].join('');
		} else if (type === 'authors') {
			title = existing ? 'Edit author' : 'Add author';
			fields = [
				field('Author name', 'name', existing?.name),
				field('Country', 'country', existing?.country, 'text', { required: false })
			].join('');
		} else if (type === 'categories') {
			title = existing ? 'Edit category' : 'Add category';
			fields = [
				field('Category name', 'name', existing?.name),
				field('Description', 'description', existing?.description, 'text', { required: false })
			].join('');
		} else if (type === 'loans') {
			title = 'Issue a book';
			const availableBooks = data.books.filter((book) => book.availableCopies > 0);
			const activeMembers = data.members.filter((member) => member.status === 'active');
			fields = [
				field('Member', 'memberId', '', 'text', { choices: `<option value="">Select a member</option>${selectOptions(activeMembers, null, 'fullName')}` }),
				field('Book', 'bookId', '', 'text', { choices: `<option value="">Select an available book</option>${availableBooks.map((book) => `<option value="${book.id}">${escapeHtml(book.title)} (${book.availableCopies} available)</option>`).join('')}` }),
				field('Issue date', 'issued', today(), 'date'),
				field('Due date', 'due', dateAfter(14), 'date')
			].join('');
		}

		document.querySelector('#dialog-title').textContent = title;
		fieldsContainer.innerHTML = fields;
		dialog.showModal();
		fieldsContainer.querySelector('input, select')?.focus();
	}

	function showFormError(message) {
		formError.textContent = message;
		formError.hidden = false;
	}

	function duplicate(collection, key, value, exceptId) {
		const normalized = String(value).trim().toLocaleLowerCase();
		return collection.some((record) => record.id !== exceptId
			&& String(record[key] ?? '').trim().toLocaleLowerCase() === normalized);
	}

	function saveRecord(event) {
		event.preventDefault();
		if (!activeForm) {
			return;
		}
		const values = Object.fromEntries(new FormData(form).entries());
		const { type, id } = activeForm;
		const existing = id === null ? null : getById(data[type], id);

		if (type === 'loans') {
			const member = getById(data.members, values.memberId);
			const book = getById(data.books, values.bookId);
			if (!member || member.status !== 'active') {
				showFormError('Choose an active member.');
				return;
			}
			if (!book || book.availableCopies < 1) {
				showFormError('Choose a book that is currently available.');
				return;
			}
			if (values.due < values.issued) {
				showFormError('The due date must be on or after the issue date.');
				return;
			}
			book.availableCopies -= 1;
			data.loans.push({
				id: nextId(data.loans),
				memberId: member.id,
				bookId: book.id,
				issued: values.issued,
				due: values.due,
				returned: ''
			});
		} else if (type === 'books') {
			if (!values.title.trim() || !values.isbn.trim()) {
				showFormError('Enter a title and ISBN.');
				return;
			}
			if (duplicate(data.books, 'isbn', values.isbn, id)) {
				showFormError('That ISBN is already in the catalog.');
				return;
			}
			const totalCopies = Number(values.totalCopies);
			const checkedOut = existing ? existing.totalCopies - existing.availableCopies : 0;
			if (!Number.isInteger(totalCopies) || totalCopies < Math.max(1, checkedOut)) {
				showFormError(`Total copies must be at least ${Math.max(1, checkedOut)} for this book.`);
				return;
			}
			const record = {
				id: existing?.id ?? nextId(data.books),
				isbn: values.isbn.trim(),
				title: values.title.trim(),
				authorId: Number(values.authorId),
				categoryId: Number(values.categoryId),
				publisher: values.publisher.trim(),
				year: Number(values.year),
				totalCopies,
				availableCopies: totalCopies - checkedOut
			};
			upsert(data.books, record);
		} else if (type === 'members') {
			if (!values.fullName.trim() || !values.memberNumber.trim() || !values.email.trim()) {
				showFormError('Enter the member name, number, and email.');
				return;
			}
			if (duplicate(data.members, 'memberNumber', values.memberNumber, id)) {
				showFormError('That member number is already in use.');
				return;
			}
			if (duplicate(data.members, 'email', values.email, id)) {
				showFormError('That email address is already in use.');
				return;
			}
			upsert(data.members, {
				id: existing?.id ?? nextId(data.members),
				memberNumber: values.memberNumber.trim(),
				fullName: values.fullName.trim(),
				email: values.email.trim(),
				phone: values.phone.trim(),
				status: values.status,
				dateJoined: values.dateJoined
			});
		} else if (type === 'authors') {
			if (!values.name.trim()) {
				showFormError('Enter an author name.');
				return;
			}
			if (duplicate(data.authors, 'name', values.name, id)) {
				showFormError('That author is already in the catalog.');
				return;
			}
			upsert(data.authors, {
				id: existing?.id ?? nextId(data.authors),
				name: values.name.trim(),
				country: values.country.trim()
			});
		} else if (type === 'categories') {
			if (!values.name.trim()) {
				showFormError('Enter a category name.');
				return;
			}
			if (duplicate(data.categories, 'name', values.name, id)) {
				showFormError('That category already exists.');
				return;
			}
			upsert(data.categories, {
				id: existing?.id ?? nextId(data.categories),
				name: values.name.trim(),
				description: values.description.trim()
			});
		}

		activeForm = null;
		dialog.close();
		const saved = saveData();
		const recordName = {
			books: 'Book',
			members: 'Member',
			authors: 'Author',
			categories: 'Category'
		}[type];
		showNotice(saved
			? (type === 'loans' ? 'Book issued successfully.' : `${recordName} saved successfully.`)
			: 'The change was made for this session, but could not be saved in this browser.');
	}

	function upsert(collection, record) {
		const index = collection.findIndex((item) => item.id === record.id);
		if (index === -1) {
			collection.push(record);
		} else {
			collection[index] = record;
		}
	}

	function removeRecord(type, id) {
		const record = getById(data[type], id);
		if (!record) {
			showNotice('That record could not be found.');
			return;
		}
		const references = {
			books: data.loans.some((loan) => loan.bookId === record.id),
			members: data.loans.some((loan) => loan.memberId === record.id),
			authors: data.books.some((book) => book.authorId === record.id),
			categories: data.books.some((book) => book.categoryId === record.id)
		};
		if (references[type]) {
			showNotice('This record is in use and cannot be deleted.');
			return;
		}
		const label = record.title || record.fullName || record.name || record.memberNumber;
		if (!window.confirm(`Delete "${label}"? This cannot be undone.`)) {
			return;
		}
		data[type] = data[type].filter((item) => item.id !== record.id);
		const saved = saveData();
		showNotice(saved ? 'Record deleted.' : 'The record was deleted for this session, but the change could not be saved in this browser.');
	}

	function returnLoan(id) {
		const loan = getById(data.loans, id);
		if (!loan || loan.returned) {
			showNotice('This loan is already returned or no longer exists.');
			return;
		}
		if (!window.confirm(`Mark "${bookName(loan.bookId)}" as returned by ${memberName(loan.memberId)}?`)) {
			return;
		}
		loan.returned = today();
		const book = getById(data.books, loan.bookId);
		if (book) {
			book.availableCopies = Math.min(book.totalCopies, book.availableCopies + 1);
		}
		saveData();
		showNotice(storageWarning
			? 'The return was recorded for this session, but could not be saved in this browser.'
			: 'Book marked as returned.');
	}

	function showNotice(message) {
		notice = message;
		render();
	}

	document.addEventListener('click', (event) => {
		const target = event.target instanceof Element ? event.target : null;
		if (!target) {
			return;
		}
		const addButton = target.closest('[data-add]');
		const editButton = target.closest('[data-edit]');
		const deleteButton = target.closest('[data-delete]');
		const returnButton = target.closest('[data-return]');
		if (addButton) {
			openForm(addButton.dataset.add);
		} else if (editButton) {
			openForm(editButton.dataset.edit, editButton.dataset.id);
		} else if (deleteButton) {
			removeRecord(deleteButton.dataset.delete, Number(deleteButton.dataset.id));
		} else if (returnButton) {
			returnLoan(Number(returnButton.dataset.return));
		} else if (target.closest('[data-close-dialog]')) {
			dialog.close();
		} else if (target.closest('[data-reset]')) {
			if (window.confirm('Reset this browser’s demo data to the original sample records?')) {
				data = clone(seedData);
				const saved = saveData();
				showNotice(saved
					? 'Sample data has been reset.'
					: 'Sample data was reset for this session, but could not be saved in this browser.');
			}
		}
	});

	form.addEventListener('submit', saveRecord);
	dialog.addEventListener('close', () => {
		activeForm = null;
	});
	window.addEventListener('hashchange', render);
	document.querySelector('[data-year]').textContent = String(new Date().getFullYear());
	if (!location.hash || !Object.hasOwn(pages, location.hash.slice(1))) {
		location.hash = '#dashboard';
	} else {
		render();
	}
})();
