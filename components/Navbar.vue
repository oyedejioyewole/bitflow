<template>
  <section id="navigation-menu" class="menu menu3 cid-sLhoPz7Ycg" once="menu">
    <nav class="navbar navbar-dropdown navbar-fixed-top navbar-expand-lg">
      <div class="container">
        <div class="navbar-brand">
          <span class="navbar-logo">
            <NuxtLink to="/">
              <NuxtImg
                format="webp"
                src="/images/bitflow.png"
                alt="Bitflow"
                style="height: 3rem"
              />
            </NuxtLink>
          </span>
          <span class="navbar-caption-wrap"
            ><NuxtLink
              class="navbar-caption text-black text-primary display-7"
              to="/"
              >Bitflow</NuxtLink
            ></span
          >
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <div class="hamburger">
            <span />
            <span />
            <span />
            <span />
          </div>
        </button>
        <div id="navbarSupportedContent" class="collapse navbar-collapse">
          <ul
            class="navbar-nav nav-dropdown nav-right"
            data-app-modern-menu="true"
          >
            <li class="nav-item">
              <NuxtLink
                class="nav-link link text-black text-primary display-4"
                to="/#switch-header-1"
                ><span
                  class="ti-pencil-alt mbr-iconfont mbr-iconfont-btn"
                />Mission</NuxtLink
              >
            </li>
            <li class="nav-item">
              <NuxtLink
                to="/works"
                class="nav-link link text-black text-primary display-4"
              >
                <span
                  class="ti-layout-tab mbr-iconfont mbr-iconfont-btn"
                />Works
              </NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink
                class="nav-link link text-black text-primary display-4"
                to="/#our-team"
                ><span
                  class="ti-headphone-alt mbr-iconfont mbr-iconfont-btn"
                />Team</NuxtLink
              >
            </li>
          </ul>
          <div class="icons-menu">
            <NuxtLink
              class="iconfont-wrapper"
              to="https://github.com/OyewoleOyedeji/bitflow.git"
              target="_blank"
              title="Clone this template's repository!"
            >
              <span class="p-2 mbr-iconfont ti-import" />
            </NuxtLink>
            <NuxtLink class="iconfont-wrapper" to="#" title="Toggle dark mode">
              <span class="p-2 mbr-iconfont ti-shine" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </nav>
  </section>
</template>
