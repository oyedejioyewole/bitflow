<script setup lang="ts">
const currentYear = ref(new Date().getFullYear());
const templateAuthor = "Oyewole Oyedeji";
const repositoryURL = "https://github.com/OyewoleOyedeji/bitflow.git";
</script>

<template>
  <section id="footer" class="footer5 cid-sLln5ZHt9S" once="footers">
    <div class="container">
      <div class="media-container-row">
        <div class="col-md-2 col-6">
          <div class="media-wrap">
            <NuxtLink to="/">
              <NuxtImg
                format="webp"
                loading="lazy"
                src="/images/bitflow.png"
                alt="Bitflow"
              />
            </NuxtLink>
          </div>
        </div>
        <div class="col-10 col-6">
          <p class="mbr-text align-right links mbr-fonts-style display-7">
            <NuxtLink
              class="text-black"
              to="/#switch-header-1"
              style="margin-right: 2rem"
              >Mission</NuxtLink
            >
            <NuxtLink class="text-black" to="/works" style="margin-right: 2rem"
              >Works
            </NuxtLink>

            <NuxtLink class="text-black" to="/#our-team">Team</NuxtLink>
          </p>
        </div>
      </div>
      <div class="footer-lower">
        <div class="media-container-row">
          <div class="col-md-12">
            <hr />
          </div>
        </div>
        <div class="media-container-row">
          <div class="col-md-6 copyright">
            <p class="mbr-text mbr-fonts-style display-7">
              © Copyright {{ currentYear }} {{ templateAuthor }} - All Rights
              Reserved. Proudly made in Nigeria
            </p>
          </div>
          <div class="col-md-6">
            <div class="social-list align-right">
              <div class="soc-item">
                <NuxtLink
                  :to="repositoryURL"
                  title="Clone this template's repository!"
                >
                  <span class="mbr-iconfont mbr-iconfont-social ti-import" />
                </NuxtLink>
              </div>
              <div class="soc-item">
                <NuxtLink to="#" title="Share this template with others!">
                  <span class="mbr-iconfont mbr-iconfont-social ti-share" />
                </NuxtLink>
              </div>
              <div class="soc-item">
                <NuxtLink to="#" target="_blank" title="Visit the my blog!">
                  <span
                    class="mbr-iconfont mbr-iconfont-social fab fa-fw fa-dev"
                  />
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
