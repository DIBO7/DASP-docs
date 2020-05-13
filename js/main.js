"use strict";

const buttons = document.getElementById('navigations').getElementsByTagName('a');
const place = document.getElementById('bodyContainer')

for (let b = 0; b < buttons.length; b++){
	buttons[b].addEventListener('click', event => {
		event.preventDefault();
		linkHighlighter(buttons[b])
		if (b === 0){
			place.innerHTML = overview
		} else if(b === 1){
			place.innerHTML = instruction
		} else if(b===2){
			place.innerHTML = contributors
		}
	})
}

window.addEventListener('load', event =>{
	buttons[0].classList.add('active')
	place.innerHTML = overview
})

function linkHighlighter(e){
	for (let items of buttons){
		items.classList.remove('active');
	}
	return e.classList.add("active");
}


const overview = `<div>
			<h2>WHAT IS DJANGO ABSTRACT STARTPOINT?</h2>
			<p>Django Abstract Startpoint is an open-source package built on django to enable django project developers, in some cases, bypass the usual django setups on django including but not limited to staticfiles, media and templates settings, django built-in login, logout, password reset etc functionalities. Django Abstract Startpoint uses "Django AbstractBaseUser" rather than the default user type built on django.</p>
			<h2>WHEN TO USE DJANGO ABSTRACT STARTPOINT</h2>
			<p>Django Abstract Startpoint is an ideal place to start django project if you want to use 'AbstractBaseUser' type rather than the default django user type.
			 All you have to do is 'makemigrations' and edit the user model to suit your needs. DASP will write the usual necessary
			 things in your django project including the template, static and media settings plus simple easily editable template html pages with bootstrap4.</p>
			<h2>FEATURES OF DJANGO ABSTRACT STARTPOINT</h2>
			<p>Django Absract Startpoint, apart from coming with the editable 'AbstractBaseUser' model out of the box, it also comes with all templates, staticfiles and media settings ready to go, login, logout, password reset and the likes templates and functionality unpacked and a simple and easily editable index view and page. With Django Abstract Startpoint merged to your new django project, you just go straight to writing your important codes as D.A.S.P takes care of the basic stuff for you.</p>
			<br><br>
		</div>`

const instruction = `<div class="">
				<div class="codeArea">
					<p>#requirements</p>
					<p>django</p>
				</div>
				<p>you need to have django installed to follow along.</p><br>
				<p>1) Start a new django project</p>
				<div class="codeArea">
					<p>(VirtualEnvironment) C:/User> django-admin startproject Myproject</p>
				</div>
				<p>2) Clone/download django abstract startpoint contents into your django project</p>
				<div class="codeArea">
					<p>(VirtualEnvironment) C:/User/MyProject> git clone https://github.com/IbraCodes/Django-Abstract-StartPoint.git</p>
					<p>(VirtualEnvironment) C:/User/MyProject> dir</p>
					<p>--MyProject</p>
					<ul>
						<p>---ALIEN</p>
						<p>---DjangoAbstractBasics</p>
						<p>---MyProject</p>
						<p>---static</p>
						<p>---templates</p>
						<p>---.gitignore</p>
						<p>---db.sqlite3</p>
						<p>---manage.py</p>
						<p>---requirements.txt</p>
					</ul>
					</ul>
				</div>
				<p>3) Open the ALIEN folder and RUN 'AUTO_START.py' executable</p>
				<div class="codeArea">
					<p>Input title of your Django Project: MyProject</p>
					<p>What do you want to name the app that contains the AbstractBaseUser model?: MyApp</p>
					<p>Initiating Django-Abstract-StartPoint protocol...preparing to write...</p>
					<p>All Done!</p>
				</div>
				<p>feel free to re-run the 'AUTO_START.py' executable to change the name of the django app</p>
				<p>4) Delete the ALIEN folder (optional but recommended). If you do, you should have a clean django project structure.</p>
				<div class="codeArea">
					<p>(VirtualEnvironment) C:/User/MyProject> dir</p>
					<p>--MyProject</p>
					<ul>
						<p>---MyApp</p>
						<p>---MyProject</p>
						<p>---static</p>
						<p>---templates</p>
						<p>---.gitignore</p>
						<p>---db.sqlite3</p>
						<p>---manage.py</p>
						<p>---requirements.txt</p>
					</ul>
				</div>
				<p>5) Check out the AbstractBaseUser model in 'MyApp/models.py', it contains some fields already, edit it however you want. If you do, make proportional changes to 'MyApp/admin.py'</p>
				<p>6) migrate to your database</p>
				<div class="codeArea">
					<p>(VirtualEnvironment) C:/User/MyProject> python manage.py makemigrations</p>
					<p>(VirtualEnvironment) C:/User/MyProject> python manage.py migrate</p>
				</div>
				<p>7) Create a superuser</p>
				<div class="codeArea">
					<p>(VirtualEnvironment) C:/User/MyProject> python manage.py createsuperuser</p>
				</div>
				<p>8) Finally, start your server</p>
				<div class="codeArea">
					<p>(VirtualEnvironment) C:/User/MyProject> python manage.py runserver</p>
				</div>
				<p>Note: you don't have to worry about any error. Incase of an error, it would automatically undo itself to the previous state of the project. And incase for some reason, you want to undo the changes of DASP yourself, your previous 'settings.py' is safely written in 'ALIEN/empty_file1.py' and your previous 'urls.py' is safely written in 'ALIEN/empty_file2.py'. Once you copy those two files back, delete everything from the DASP package and your django project should go back to its normal state.</p>
		</div>`


const contributors = `<a href='https://github.com/IbraCodes' target='_blank'>@Ibra-Codes</a>`