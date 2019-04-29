<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light border-0">
    <nuxt-link to="/" class="navbar-brand" tag="a">Köşe Yazısı</nuxt-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li class="nav-item active">
          <nuxt-link to="/posts" class="nav-item" tag="li">
            <a class="nav-link" href="#">Yazılar</a>
          </nuxt-link>
        </li>
      </ul>
      <ul class="navbar-nav my-2 my-lg-0">
        <li class="nav-item mr-sm-2">
          <nuxt-link to="/admin" class="nav-item" tag="li">
            <a class="nav-link" href="#">Admin</a>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
