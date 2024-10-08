- CSEN 60 Lab 1
- Firstname Lastname
- 10/01/2024

# Lab 1 Submission

## Part 1

Chosen webpage: https://www.scu.edu/engineering/academic-programs/department-of-computer-engineering/undergraduate/web-design-and-engineering-major/ 

### 1a

5 block elements:

```
<div class="col-12 col-md-8 align-self-center"></div>
```
```
 <h1 class="text-sans-light" id="page-title">Faculty &amp; Staff</h1>
 ```

```
<li class="breadcrumb-item"><a href="/">Home</a></li>
```
```
<ul class="list-unstyled list-spaced">
<li><a href="https://www.scu.edu/map/">Maps &amp; Directions</a></li>
<li><a href="https://phonebook.scu.edu/">Contact Us</a></li>
</ul>
```

```
<p>Same as for the Bachelor of Science in Computer Science and Engineering.</p>
```


### 1b

3 inline elements (if none found, provide 1 example of an inline element that could be added to the page):

```
 <script>function submitDeptSwitch() {    elmt=document.getElementById("departments");    var val = elmt.value;    if (val) {        window.location.href = val;    } }</script>
```

```
 <a href="/engineering/" class="h4 text-dark text-uppercase wordmark d-block mb-4">School of Engineering</a>

```
```
<i class="far fa-arrow-down"></i>
```


### 1c

3 HTML5 semantic tags (if none found, explain where you would add some):
```
<header class="header-legacy bg-light">
    <nav class="navbar navbar-expand-lg navbar-light bg-white d-none d-lg-block py-0 initial nav-users" id="navbarUsers">
      <div class="container">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
<a class="nav-link text-uppercase px-3" href="/students/">Students</a>
</li>
<li class="nav-item">
<a class="nav-link text-uppercase px-3" href="/faculty/">Faculty &amp; Staff</a>
</li>
<li class="nav-item">
<a class="nav-link text-uppercase px-3" href="/parents/">Families</a>
</li>
<li class="nav-item">
<a class="nav-link text-uppercase px-3" href="/alumni/">Alumni</a>
</li>
<li class="nav-item">
<a class="nav-link text-uppercase px-3" href="/visitors/">Visitors</a>
</li>
    </nav>
  </header>
```
```
<footer class="footer-core border-top bg-white pt-4 footer-core">
	<div class="container">
		<a href="/engineering/" class="h4 text-dark text-uppercase wordmark d-block mb-4">School of Engineering</a>
		<div class="row">
			<div class="col-12 col-md-6">
				<p class="mb-0">500 El Camino Real<br>Santa Clara, CA 95053<br>(408) 554-4000</p>
<ul class="list-unstyled list-spaced">
<li><a href="https://www.scu.edu/map/">Maps &amp; Directions</a></li>
<li><a href="https://phonebook.scu.edu/">Contact Us</a></li>
</ul>
				
			</div>
		</div>
	</div>
</footer>
```
```
<nav class="navbar navbar-expand-lg navbar-dark py-0 fixed-top nav-fixed initial nav-brand" id="navbarBrand">
      <div class="container">
        <button class="navbar-toggler px-3 py-2" type="button" data-toggle="collapse" data-target="#navbarBrandList" aria-controls="navbarBrandList" aria-expanded="false" aria-label="menu">
          <span class="text-uppercase">menu</span>
        </button>
        <form class="form-inline d-lg-none my-2" action="https://www.scu.edu/search" method="get">
          <div class="input-group">
            <input class="form-control" name="q" type="search" placeholder="Search" aria-label="Search">
            <div class="input-group-append">
              <button class="input-group-text btn btn-light" type="submit">
                <span class="sr-only">Search</span>
                <i aria-hidden="true" class="fas fa-search"></i>
              </button>
            </div>
          </div>
        </form>
        <div class="collapse navbar-collapse bg-primary" id="navbarBrandList">
        </div>
      </div>
    </nav>

```
