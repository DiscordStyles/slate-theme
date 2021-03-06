<script>
  let menu;
  let btn;

  function changeTheme() {
    document.documentElement.classList.toggle("theme-light");
    document.documentElement.classList.toggle("theme-dark");
  }

  function openDropdown() {
    menu.classList.toggle("visible");
    btn.classList.toggle("dropdown-visible");
  }

  function viewPreview() {
    document.body.classList.toggle("preview-visible");
  }

  function dropdownHandler(e) {
    if (!e.target.classList.contains("dropdown-btn") && !e.target.classList.contains("dropdown-menu")) {
      menu.classList.remove("visible");
      btn.classList.remove("dropdown-visible");
    }
  }
</script>

<svelte:body on:click={dropdownHandler} />

<div class="home">
  <header>
    <h2 class="header-title">Slate</h2>
    <nav>
      <a href="/">Home</a>
      <a href="/palettes">Palettes</a>
      <a href="https://discord.gg/TeRQEPb" target="_blank">Discord</a>
      <a href="https://github.com/discordstyles/slate/wiki/" target="_blank">Docs</a>
      <div id="theme-switcher">
        <button id="theme" on:click={changeTheme}>
          <svg class="light-enabled" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path
              fill-rule="evenodd"
              fill="currentColor"
              d="M9.598 1.591a.75.75 0 01.785-.175 7 7 0 11-8.967 8.967.75.75 0 01.961-.96 5.5 5.5 0 007.046-7.046.75.75 0 01.175-.786zm1.616 1.945a7 7 0 01-7.678 7.678 5.5 5.5 0 107.678-7.678z" /></svg>
          <svg class="dark-enabled" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path
              fill-rule="evenodd"
              fill="currentColor"
              d="M8 10.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM8 12a4 4 0 100-8 4 4 0 000 8zM8 0a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0V.75A.75.75 0 018 0zm0 13a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 018 13zM2.343 2.343a.75.75 0 011.061 0l1.06 1.061a.75.75 0 01-1.06 1.06l-1.06-1.06a.75.75 0 010-1.06zm9.193 9.193a.75.75 0 011.06 0l1.061 1.06a.75.75 0 01-1.06 1.061l-1.061-1.06a.75.75 0 010-1.061zM16 8a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 0116 8zM3 8a.75.75 0 01-.75.75H.75a.75.75 0 010-1.5h1.5A.75.75 0 013 8zm10.657-5.657a.75.75 0 010 1.061l-1.061 1.06a.75.75 0 11-1.06-1.06l1.06-1.06a.75.75 0 011.06 0zm-9.193 9.193a.75.75 0 010 1.06l-1.06 1.061a.75.75 0 11-1.061-1.06l1.06-1.061a.75.75 0 011.061 0z" /></svg>
        </button>
      </div>
    </nav>
  </header>
  <main id="scroller">
    <div class="background-container">
      <div id="main" class="container">
        <section class="section main fadeIn">
          <h1 class="title">Slate</h1>
          <p class="description">An <span style="color: var(--syntax-green)">optimized</span>, <span style="color: var(--syntax-orange)">consistent</span>, and <span style="color: var(--syntax-blue)">functional</span> theme for Discord based on GitHub's design language.</p>
          <div class="btns">
            <div class="dropdown">
              <a class="button primary" href="https://betterdiscord.net/ghdl?id=3358" target="_blank">Download for BD</a>
              <button class="dropdown-btn" bind:this={btn} on:click={openDropdown}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill="currentColor" fill-rule="evenodd" d="M12.78 6.22a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06 0L3.22 7.28a.75.75 0 011.06-1.06L8 9.94l3.72-3.72a.75.75 0 011.06 0z" /></svg>
              </button>
              <div class="dropdown-menu" bind:this={menu}>
                <a class="dropdown-item" href="https://github.com/DiscordStyles/Slate/archive/master.zip" target="_blank">Source ZIP</a>
                <a class="dropdown-item" href="https://github.com/DiscordStyles/Slate" target="_blank">Download for Powercord</a>
                <a class="dropdown-item soon" href="/">Download for Vizality</a>
              </div>
            </div>
            <a class="button secondary" href="https://github.com/DiscordStyles/Slate" target="_blank">View source</a>
          </div>
        </section>
        <section class="section">
          <div class="preview" on:click={viewPreview}><img class="preview-img dark-enabled" src="https://i.imgur.com/48zJ06n.png" alt="Dark theme preview" /> <img class="preview-img light-enabled" src="https://i.imgur.com/Dpkar2i.png" alt="Light theme preview" /></div>
        </section>
      </div>
      <div id="features-container" class="container">
        <h2>What is Slate?</h2>
        <section id="feature-showcase">
          <div id="feature-view">
            <div class="feature">
              <div class="palette-preview feature-img">
                <div class="palette-color palette-color-1" />
                <div class="palette-color palette-color-2" />
                <div class="palette-color palette-color-3" />
                <div class="palette-color palette-color-4" />
              </div>
              <div class="feature-content">
                <h3 class="feature-title">Customizable</h3>
                <p class="feature-description">Slate is one of the most customizable themes out there. You can edit almost anything about the appearance from fonts to backgrounds. We also offer pre-made <a href="./palettes.html">Palettes</a>.</p>
              </div>
            </div>
            <div class="feature">
              <div id="controls-preview" class="feature-img">
                <div class="control-preview-column">
                  <h2>Aa</h2>
                  <p>Bb</p>
                </div>
                <div class="control-preview-column"><button class="button primary dummy">Test1</button> <button class="button secondary dummy">Test2</button></div>
                <div class="control-preview-column"><input type="checkbox" class="dummy" /> <input type="text" placeholder="Lorem Ipsum" class="dummy" /></div>
              </div>
              <div class="feature-content">
                <h3 class="feature-title">Consistent</h3>
                <p class="feature-description">Slate's current compiled base file is over 12,000 lines long, and touches almost every part of the app. It's design is completely consistent from the colors to font scaling.</p>
              </div>
            </div>
            <div class="feature">
              <div class="feature-img" id="optimized">
                <svg fill="currentColor" aria-hidden="true" class="octicon" height="64" role="img" viewBox="0 0 16 16" width="64" style="display:inline-block;fill:currentColor;user-select:none;vertical-align:middle"><path
                    fill-rule="evenodd"
                    d="M9 5H8V4h1v1zm4 3h-1v1h1V8zM6 5H5v1h1V5zM5 8H4v1h1V8zm11-5.5l-.5-.5L9 7c-.06-.02-1 0-1 0-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-.92l6-5.58zm-1.59 4.09c.19.61.3 1.25.3 1.91 0 3.42-2.78 6.2-6.2 6.2-3.42 0-6.21-2.78-6.21-6.2 0-3.42 2.78-6.2 6.2-6.2 1.2 0 2.31.34 3.27.94l.94-.94A7.459 7.459 0 0 0 8.51 1C4.36 1 1 4.36 1 8.5 1 12.64 4.36 16 8.5 16c4.14 0 7.5-3.36 7.5-7.5 0-1.03-.2-2.02-.59-2.91l-1 1z" /></svg>
              </div>
              <div class="feature-content">
                <h3 class="feature-title">Optimized</h3>
                <p class="feature-description">Animations on Slate are almost non-existent, and are very minimal when utilized. Slate avoids the use of properties such as translate() to position elements and global selectors when possible.</p>
              </div>
            </div>
            <div class="feature">
              <div class="feature-img" id="compatible">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50"><title>icon-windows</title>
                  <g fill="none" fill-rule="evenodd">
                    <path d="M0 0h50v50H0z" />
                    <path d="M50 0L23.46 3.94v19.497H50V0zM0 7.812v15.626h20.313V4.688L0 7.81zM0 43.75l20.313 3.125V26.562H0V43.75zm23.46 3.125L50 50V26.562H23.46v20.313z" fill="currentColor" />
                  </g></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="48" viewBox="0 0 40 48"><title>icon-ios</title>
                  <g fill="none" fill-rule="evenodd">
                    <path d="M-4.063 0h50v50h-50z" />
                    <path
                      d="M32.938 25.94c-.056-5.957 4.862-8.816 5.082-8.963-2.764-4.044-7.067-4.594-8.603-4.66-3.667-.367-7.15 2.16-9.005 2.16-1.86 0-4.727-2.103-7.768-2.05-3.997.056-7.674 2.326-9.732 5.903-4.156 7.194-1.068 17.867 2.976 23.71 1.977 2.86 4.33 6.07 7.427 5.957 2.98-.12 4.108-1.93 7.71-1.93 3.604 0 4.616 1.93 7.77 1.866 3.205-.056 5.237-2.912 7.196-5.78 2.27-3.32 3.207-6.526 3.263-6.69-.065-.03-6.25-2.4-6.315-9.524M27.02 8.457c1.634-1.994 2.746-4.762 2.443-7.518-2.362.09-5.23 1.57-6.93 3.564-1.526 1.765-2.858 4.576-2.5 7.28 2.648.202 5.342-1.342 6.986-3.327"
                      fill="currentColor" />
                  </g></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path
                    fill="currentColor"
                    d="M20.581 19.049c-.55-.446-.336-1.431-.907-1.917.553-3.365-.997-6.331-2.845-8.232-1.551-1.595-1.051-3.147-1.051-4.49 0-2.146-.881-4.41-3.55-4.41-2.853 0-3.635 2.38-3.663 3.738-.068 3.262.659 4.11-1.25 6.484-2.246 2.793-2.577 5.579-2.07 7.057-.237.276-.557.582-1.155.835-1.652.72-.441 1.925-.898 2.78-.13.243-.192.497-.192.74 0 .75.596 1.399 1.679 1.302 1.461-.13 2.809.905 3.681.905.77 0 1.402-.438 1.696-1.041 1.377-.339 3.077-.296 4.453.059.247.691.917 1.141 1.662 1.141 1.631 0 1.945-1.849 3.816-2.475.674-.225 1.013-.879 1.013-1.488 0-.39-.139-.761-.419-.988zm-9.147-10.465c-.319 0-.583-.258-1-.568-.528-.392-1.065-.618-1.059-1.03 0-.283.379-.37.869-.681.526-.333.731-.671 1.249-.671.53 0 .69.268 1.41.579.708.307 1.201.427 1.201.773 0 .355-.741.609-1.158.868-.613.378-.928.73-1.512.73zm1.665-5.215c.882.141.981 1.691.559 2.454l-.355-.145c.184-.543.181-1.437-.435-1.494-.391-.036-.643.48-.697.922-.153-.064-.32-.11-.523-.127.062-.923.658-1.737 1.451-1.61zm-3.403.331c.676-.168 1.075.618 1.078 1.435l-.31.19c-.042-.343-.195-.897-.579-.779-.411.128-.344 1.083-.115 1.279l-.306.17c-.42-.707-.419-2.133.232-2.295zm-2.115 19.243c-1.963-.893-2.63-.69-3.005-.69-.777 0-1.031-.579-.739-1.127.248-.465.171-.952.11-1.343-.094-.599-.111-.794.478-1.052.815-.346 1.177-.791 1.447-1.124.758-.937 1.523.537 2.15 1.85.407.851 1.208 1.282 1.455 2.225.227.871-.71 1.801-1.896 1.261zm6.987-1.874c-1.384.673-3.147.982-4.466.299-.195-.563-.507-.927-.843-1.293.539-.142.939-.814.46-1.489-.511-.721-1.555-1.224-2.61-2.04-.987-.763-1.299-2.644.045-4.746-.655 1.862-.272 3.578.057 4.069.068-.988.146-2.638 1.496-4.615.681-.998.691-2.316.706-3.14l.62.424c.456.337.838.708 1.386.708.81 0 1.258-.466 1.882-.853.244-.15.613-.302.923-.513.52 2.476 2.674 5.454 2.795 7.15.501-1.032-.142-3.514-.142-3.514.842 1.285.909 2.356.946 3.67.589.241 1.221.869 1.279 1.696l-.245-.028c-.126-.919-2.607-2.269-2.83-.539-1.19.181-.757 2.066-.997 3.288-.11.559-.314 1.001-.462 1.466zm4.846-.041c-.985.38-1.65 1.187-2.107 1.688-.88.966-2.044.503-2.168-.401-.131-.966.36-1.493.572-2.574.193-.987-.023-2.506.431-2.668.295 1.753 2.066 1.016 2.47.538.657 0 .712.222.859.837.092.385.219.709.578 1.09.418.447.29 1.133-.635 1.49zm-8-13.006c-.651 0-1.138-.433-1.534-.769-.203-.171.05-.487.253-.315.387.328.777.675 1.281.675.607 0 1.142-.519 1.867-.805.247-.097.388.285.143.382-.704.277-1.269.832-2.01.832z" /></svg>
              </div>
              <div class="feature-content">
                <h3 class="feature-title">Cross-compatible</h3>
                <p class="feature-description">Slate is developed for both BD and Powercord, with Windows, Linux, and macOS support in mind. We also plan to include web versions and support for other mods, such as Vizality and EnhancedDiscord.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </main>
</div>
