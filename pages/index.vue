<template>
  <div class="index">
    <div class="index-default">
      <div class="index-intro">
        <div class="index-intro-text">
          <h1 class="index-intro-text-title animated rubberBand">
            SUVAJIT
          </h1>
          <h3 class="index-intro-text-subtitle" style="animation-delay: 100ms">
            Computer Science & Engineering Student
          </h3>
          <h3 class="index-intro-text-subtitle" style="animation-delay: 100ms">
            I Enjoy Writing Node.JS & Python
          </h3>
        </div>
      </div>
      <div class="index-contact">
        <a href="https://github.com/csuvajit" class="index-contact-link animated bounceIn" style="animation-delay: 0ms">
          <i class="fab fa-github index-contact-link-icon" />
        </a>

        <a href="mailto:suvajit.me@gmail.com" class="index-contact-link animated bounceIn" style="animation-delay: 80ms">
          <i class="fas fa-envelope index-contact-link-icon" />
        </a>

        <a href="https://www.youtube.com/channel/UCX1a_ARPLZlbTEH5WZyLoaw" class="index-contact-link animated bounceIn" style="animation-delay: 160ms">
          <i class="fab fa-youtube index-contact-link-icon" />
        </a>

        <a href="https://discord.gg/8NP2XNV" class="index-contact-link animated bounceIn" style="animation-delay: 200ms">
          <i class="fab fa-discord index-contact-link-icon" />
        </a>
      </div>
      <div class="index-footer animated fadeIn">
        <div class="index-footer-links">
          <a href="https://github.com/csuvajit" class="index-footer-link">
            csuvajit
          </a>
        </div>
        <p class="index-footer-copyright">
          ©SUVAJIT
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.index {
  height: 100%;

  .index-default {
    padding-block-start: 7rem;
    padding-block-end: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 65%;

    .index-intro {
      display: flex;
      flex-direction: column;
      justify-content: center;

      .index-intro-image {

        .index-intro-image-source {
          height: 400px;
          border-radius: 100%;
          margin: 50px;
        }
      }

      .index-intro-text {
        display: flex;
        flex-direction: column;
        align-items: center;

        .index-intro-text-title {
          font-size: 80px;
          font-weight: 100;
        }

        .index-intro-text-subtitle {
          font-size: 30px;
          letter-spacing: 3px;
        }
      }
    }

    .index-contact {
      display: flex;
      flex-direction: row;
      align-items: center;

      .index-contact-link {
        margin: 15px;
        text-decoration: none;
        color: var(--darkest);
        transition: .25s ease-in-out;

        &:hover {
          color: var(--blue);
        }

        .index-contact-link-icon {
          font-size: 35px;
        }
      }
    }

    .index-footer {
      display: flex;
      flex-direction: column;
      align-items: center;

      .index-footer-links {
        display: flex;

        .index-footer-link {
          margin: 10px;
          text-decoration: none;
          color: var(--green-avg);
          transition: .25s ease-in-out;
          font-size: 15px;

          &:hover {
            color: var(--green-dark);
          }
        }
      }

      .index-footer-copyright {
        font-size: 20px;
        letter-spacing: 2px;
        color: var(--blue);
      }
    }
  }
}

@media only screen and (max-width: 1200px) {
  .index {

    .index-default {

      .index-intro {

        .index-intro-image {

          .index-intro-image-source {
            height: 300px;
          }
        }

        .index-intro-text {
          .index-intro-text-subtitle {
            text-align: center;
            font-size: 17px;
            letter-spacing: 0px
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 600px) {
  .index {

    .index-default {

      .index-intro {

        .index-intro-image {

          .index-intro-image-source {
            height: 200px;
          }
        }

        .index-intro-text {
          align-items: center;

          .index-intro-text-title {
            font-size: 75px;
          }

          .index-intro-text-subtitle {
            text-align: center;
            font-size: 17px;
            letter-spacing: 0.1px
          }
        }
      }

      .index-contact {

        .index-contact-link {
          margin: 10px;

          .index-contact-link-icon {
            font-size: 30px;
          }
        }
      }
    }
  }
}
</style>
