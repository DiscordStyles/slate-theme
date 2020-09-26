<script>
  import interact from "interactjs";
  import marked from "marked";
  import hljs from "highlight.js";

  let modal;

  marked.setOptions({
    highlight: function (code, lang, _callback) {
      return hljs.highlightAuto(code).value;
    },
    breaks: true,
  });

  interact(".modal-header").draggable({
    modifiers: [
      interact.modifiers.restrictRect({
        restriction: "parent",
        endOnly: true,
      }),
    ],
    listeners: {
      move: dragMoveListener,
    },
  });

  function dragMoveListener(event) {
    let x = (parseFloat(modal.getAttribute("data-x")) || 0) + event.dx;
    let y = (parseFloat(modal.getAttribute("data-y")) || 0) + event.dy;

    modal.style.webkitTransform = modal.style.transform = "translate(" + x + "px, " + y + "px)";

    // update the posiion attributes
    modal.setAttribute("data-x", x);
    modal.setAttribute("data-y", y);
  }

  // Import palettes
  import arc from "@/palettes/arc";
  import gruvbox from "@/palettes/gruvbox";
  import dracula from "@/palettes/dracula";
  import nord from "@/palettes/nord";
  import solarized from "@/palettes/solarized";
  import twitchcord from "@/palettes/twitchcord";
  import yaru from "@/palettes/yaru";

  const palettes = {
    arc,
    gruvbox,
    dracula,
    nord,
    solarized,
    twitchcord,
    yaru
  };

  let current = "";

  function setPalette(theme) {
    current = theme;
    document.querySelector("#palette").textContent = palettes[theme].replace(/```/g, "").replace("css\n", "");
  }
  function removePalette(theme) {
    current = theme;
    document.querySelector("#palette").textContent = palettes[theme].replace(/```/g, "").replace(/```/g, "");
  }
</script>

<svelte:head>
  <link rel="stylesheet" type="text/css" href="/css/palettes.css" />
</svelte:head>

<div id="app-mount">
  <div id="layer-container">
    <dialog class="modal" bind:this={modal}>
      <header class="modal-header">Available Palettes</header>
      <section class="modal-content">
        <div class="palette-container" class:active={current == ''} on:click={() => setPalette('')}>
          <div class="palette-info">
            <h3 class="palette-title">Primer (Default)</h3>
          </div>  
          <div class="palette-preview">
            <div class="palette-color" style="background: rgb(3, 102, 214)" />
            <div class="palette-color" style="background: #d1d5da" />
            <div class="palette-color" style="background: #1d2125" />
            <div class="palette-color" style="background: #24292e" />
          </div>
        </div>
        <div class="palette-container" class:active={current == 'arc'} on:click={() => setPalette('arc')}>
          <div class="palette-info">
            <h3 class="palette-title">Arc-GTK</h3>
          </div>
          <div class="palette-preview">
            <div class="palette-color" style="background: rgb(84, 128, 226)" />
            <div class="palette-color" style="background: #d3dae3" />
            <div class="palette-color" style="background: #2c303a" />
            <div class="palette-color" style="background: #373d48" />
          </div>
        </div>
        <div class="palette-container" class:active={current == 'gruvbox'} on:click={() => setPalette('gruvbox')}>
          <div class="palette-info">
            <h3 class="palette-title">Gruvbox</h3>
          </div>
          <div class="palette-preview">
            <div class="palette-color" style="background: rgb(215, 153, 33)" />
            <div class="palette-color" style="background: #bdae93" />
            <div class="palette-color" style="background: #282828" />
            <div class="palette-color" style="background: #3c3836" />
          </div>
        </div>
        <div class="palette-container" class:active={current == 'dracula'} on:click={() => setPalette('dracula')}>
          <div class="palette-info">
            <h3 class="palette-title">Dracula</h3>
          </div>
          <div class="palette-preview">
            <div class="palette-color" style="background: rgb(138, 62, 244)" />
            <div class="palette-color" style="background: #bfc5d9" />
            <div class="palette-color" style="background: #191a21" />
            <div class="palette-color" style="background: #22222c" />
          </div>
        </div>
        <div class="palette-container" class:active={current == 'nord'} on:click={() => setPalette('nord')}>
          <div class="palette-info">
            <h3 class="palette-title">Nord</h3>
          </div>
          <div class="palette-preview">
            <div class="palette-color" style="background: rgb(143, 188, 187)" />
            <div class="palette-color" style="background: #d8dee9" />
            <div class="palette-color" style="background: #2c303a" />
            <div class="palette-color" style="background: #2e3440" />
          </div>
        </div>
        <div class="palette-container" class:active={current == 'solarized'} on:click={() => setPalette('solarized')}>
          <div class="palette-info">
            <h3 class="palette-title">Solarized</h3>
          </div>
          <div class="palette-preview">
            <div class="palette-color" style="background: rgb(42, 161, 152)" />
            <div class="palette-color" style="background: #c5d0d3"/>
            <div class="palette-color" style="background: #002129"/>
            <div class="palette-color" style="background: #002b36"/>
          </div>
        </div>
        <div class="palette-container" class:active={current == 'twitchcord'} on:click={() => setPalette('twitchcord')}>
          <div class="palette-info">
            <h3 class="palette-title">Twitchcord</h3>
          </div>
          <div class="palette-preview">
            <div class="palette-color" style="background: rgb(75, 54, 124)" />
            <div class="palette-color" style="background: #c0c0c0"/>
            <div class="palette-color" style="background: #0f0e11"/>
            <div class="palette-color" style="background: #19171c"/>
          </div>
        </div>
        <div class="palette-container" class:active={current == 'yaru'} on:click={() => setPalette('yaru')}>
          <div class="palette-info">
            <h3 class="palette-title">Yaru</h3>
          </div>  
          <div class="palette-preview">
            <div class="palette-color" style="background: rgb(233, 84, 32)" />
            <div class="palette-color" style="background: #F7F7F7"/>
            <div class="palette-color" style="background: #333333"/>
            <div class="palette-color" style="background: #3D3D3D"/>
          </div>
        </div>
      </section>
    </dialog>
  </div>
  <div id="titlebar">Preview</div>
  <header id="toolbar">
    <div class="channel-header" id="toolbar-segment">
      <h1 class="name">Server 1</h1>
    </div>
    <div class="chat-header" id="toolbar-segment">
      <h1 class="name">Channel A</h1>
    </div>
    <input class="search-bar" placeholder="Search" />
  </header>
  <main class="base">
    <div class="guilds">
      <div class="guild selected">1</div>
      <div class="guild">2</div>
      <div class="guild">3</div>
    </div>
    <aside class="channels sidebar">
      <div class="channels-content container-content">
        <div class="category">
          <svg class="category-icon" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M16.59 8.59004L12 13.17L7.41 8.59004L6 10L12 16L18 10L16.59 8.59004Z" /></svg>
          <div class="entry-label">Category 1</div>
        </div>
        <div class="sidebar-entry selected">
          <svg width="24" height="24" viewBox="0 0 24 24" class="channel-icon"><path
              fill="currentColor"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.88657 21C5.57547 21 5.3399 20.7189 5.39427 20.4126L6.00001 17H2.59511C2.28449 17 2.04905 16.7198 2.10259 16.4138L2.27759 15.4138C2.31946 15.1746 2.52722 15 2.77011 15H6.35001L7.41001 9H4.00511C3.69449 9 3.45905 8.71977 3.51259 8.41381L3.68759 7.41381C3.72946 7.17456 3.93722 7 4.18011 7H7.76001L8.39677 3.41262C8.43914 3.17391 8.64664 3 8.88907 3H9.87344C10.1845 3 10.4201 3.28107 10.3657 3.58738L9.76001 7H15.76L16.3968 3.41262C16.4391 3.17391 16.6466 3 16.8891 3H17.8734C18.1845 3 18.4201 3.28107 18.3657 3.58738L17.76 7H21.1649C21.4755 7 21.711 7.28023 21.6574 7.58619L21.4824 8.58619C21.4406 8.82544 21.2328 9 20.9899 9H17.41L16.35 15H19.7549C20.0655 15 20.301 15.2802 20.2474 15.5862L20.0724 16.5862C20.0306 16.8254 19.8228 17 19.5799 17H16L15.3632 20.5874C15.3209 20.8261 15.1134 21 14.8709 21H13.8866C13.5755 21 13.3399 20.7189 13.3943 20.4126L14 17H8.00001L7.36325 20.5874C7.32088 20.8261 7.11337 21 6.87094 21H5.88657ZM9.41045 9L8.35045 15H14.3504L15.4104 9H9.41045Z" /></svg>
          <div class="entry-label">Channel A</div>
        </div>
        <div class="sidebar-entry active">
          <svg width="24" height="24" viewBox="0 0 24 24" class="channel-icon"><path
              fill="currentColor"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.88657 21C5.57547 21 5.3399 20.7189 5.39427 20.4126L6.00001 17H2.59511C2.28449 17 2.04905 16.7198 2.10259 16.4138L2.27759 15.4138C2.31946 15.1746 2.52722 15 2.77011 15H6.35001L7.41001 9H4.00511C3.69449 9 3.45905 8.71977 3.51259 8.41381L3.68759 7.41381C3.72946 7.17456 3.93722 7 4.18011 7H7.76001L8.39677 3.41262C8.43914 3.17391 8.64664 3 8.88907 3H9.87344C10.1845 3 10.4201 3.28107 10.3657 3.58738L9.76001 7H15.76L16.3968 3.41262C16.4391 3.17391 16.6466 3 16.8891 3H17.8734C18.1845 3 18.4201 3.28107 18.3657 3.58738L17.76 7H21.1649C21.4755 7 21.711 7.28023 21.6574 7.58619L21.4824 8.58619C21.4406 8.82544 21.2328 9 20.9899 9H17.41L16.35 15H19.7549C20.0655 15 20.301 15.2802 20.2474 15.5862L20.0724 16.5862C20.0306 16.8254 19.8228 17 19.5799 17H16L15.3632 20.5874C15.3209 20.8261 15.1134 21 14.8709 21H13.8866C13.5755 21 13.3399 20.7189 13.3943 20.4126L14 17H8.00001L7.36325 20.5874C7.32088 20.8261 7.11337 21 6.87094 21H5.88657ZM9.41045 9L8.35045 15H14.3504L15.4104 9H9.41045Z" /></svg>
          <div class="entry-label">Channel B</div>
        </div>
        <div class="sidebar-entry hover">
          <svg width="24" height="24" viewBox="0 0 24 24" class="channel-icon"><path
              fill="currentColor"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.88657 21C5.57547 21 5.3399 20.7189 5.39427 20.4126L6.00001 17H2.59511C2.28449 17 2.04905 16.7198 2.10259 16.4138L2.27759 15.4138C2.31946 15.1746 2.52722 15 2.77011 15H6.35001L7.41001 9H4.00511C3.69449 9 3.45905 8.71977 3.51259 8.41381L3.68759 7.41381C3.72946 7.17456 3.93722 7 4.18011 7H7.76001L8.39677 3.41262C8.43914 3.17391 8.64664 3 8.88907 3H9.87344C10.1845 3 10.4201 3.28107 10.3657 3.58738L9.76001 7H15.76L16.3968 3.41262C16.4391 3.17391 16.6466 3 16.8891 3H17.8734C18.1845 3 18.4201 3.28107 18.3657 3.58738L17.76 7H21.1649C21.4755 7 21.711 7.28023 21.6574 7.58619L21.4824 8.58619C21.4406 8.82544 21.2328 9 20.9899 9H17.41L16.35 15H19.7549C20.0655 15 20.301 15.2802 20.2474 15.5862L20.0724 16.5862C20.0306 16.8254 19.8228 17 19.5799 17H16L15.3632 20.5874C15.3209 20.8261 15.1134 21 14.8709 21H13.8866C13.5755 21 13.3399 20.7189 13.3943 20.4126L14 17H8.00001L7.36325 20.5874C7.32088 20.8261 7.11337 21 6.87094 21H5.88657ZM9.41045 9L8.35045 15H14.3504L15.4104 9H9.41045Z" /></svg>
          <div class="entry-label">Channel C</div>
        </div>
        <div class="sidebar-entry">
          <svg width="24" height="24" viewBox="0 0 24 24" class="channel-icon"><path
              fill="currentColor"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.88657 21C5.57547 21 5.3399 20.7189 5.39427 20.4126L6.00001 17H2.59511C2.28449 17 2.04905 16.7198 2.10259 16.4138L2.27759 15.4138C2.31946 15.1746 2.52722 15 2.77011 15H6.35001L7.41001 9H4.00511C3.69449 9 3.45905 8.71977 3.51259 8.41381L3.68759 7.41381C3.72946 7.17456 3.93722 7 4.18011 7H7.76001L8.39677 3.41262C8.43914 3.17391 8.64664 3 8.88907 3H9.87344C10.1845 3 10.4201 3.28107 10.3657 3.58738L9.76001 7H15.76L16.3968 3.41262C16.4391 3.17391 16.6466 3 16.8891 3H17.8734C18.1845 3 18.4201 3.28107 18.3657 3.58738L17.76 7H21.1649C21.4755 7 21.711 7.28023 21.6574 7.58619L21.4824 8.58619C21.4406 8.82544 21.2328 9 20.9899 9H17.41L16.35 15H19.7549C20.0655 15 20.301 15.2802 20.2474 15.5862L20.0724 16.5862C20.0306 16.8254 19.8228 17 19.5799 17H16L15.3632 20.5874C15.3209 20.8261 15.1134 21 14.8709 21H13.8866C13.5755 21 13.3399 20.7189 13.3943 20.4126L14 17H8.00001L7.36325 20.5874C7.32088 20.8261 7.11337 21 6.87094 21H5.88657ZM9.41045 9L8.35045 15H14.3504L15.4104 9H9.41045Z" /></svg>
          <div class="entry-label">Channel D</div>
        </div>
        <div class="category">
          <svg class="category-icon" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M16.59 8.59004L12 13.17L7.41 8.59004L6 10L12 16L18 10L16.59 8.59004Z" /></svg>
          <div class="entry-label">Category 2</div>
        </div>
        <div class="sidebar-entry muted">
          <svg width="24" height="24" viewBox="0 0 24 24" class="channel-icon"><path
              fill="currentColor"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.88657 21C5.57547 21 5.3399 20.7189 5.39427 20.4126L6.00001 17H2.59511C2.28449 17 2.04905 16.7198 2.10259 16.4138L2.27759 15.4138C2.31946 15.1746 2.52722 15 2.77011 15H6.35001L7.41001 9H4.00511C3.69449 9 3.45905 8.71977 3.51259 8.41381L3.68759 7.41381C3.72946 7.17456 3.93722 7 4.18011 7H7.76001L8.39677 3.41262C8.43914 3.17391 8.64664 3 8.88907 3H9.87344C10.1845 3 10.4201 3.28107 10.3657 3.58738L9.76001 7H15.76L16.3968 3.41262C16.4391 3.17391 16.6466 3 16.8891 3H17.8734C18.1845 3 18.4201 3.28107 18.3657 3.58738L17.76 7H21.1649C21.4755 7 21.711 7.28023 21.6574 7.58619L21.4824 8.58619C21.4406 8.82544 21.2328 9 20.9899 9H17.41L16.35 15H19.7549C20.0655 15 20.301 15.2802 20.2474 15.5862L20.0724 16.5862C20.0306 16.8254 19.8228 17 19.5799 17H16L15.3632 20.5874C15.3209 20.8261 15.1134 21 14.8709 21H13.8866C13.5755 21 13.3399 20.7189 13.3943 20.4126L14 17H8.00001L7.36325 20.5874C7.32088 20.8261 7.11337 21 6.87094 21H5.88657ZM9.41045 9L8.35045 15H14.3504L15.4104 9H9.41045Z" /></svg>
          <div class="entry-label">Channel E</div>
        </div>
      </div>
      <div class="channels-panel">
        <div class="panel-controls"><button class="panel-control" /> <button class="panel-control" /> <button class="panel-control" /></div>
      </div>
    </aside>
    <section class="chat">
      <div class="chat-content container-content">
        {#if current != ''}
          <div class="message">
            <div>
              {@html marked(palettes[current])}
            </div>
          </div>
        {/if}
        <div class="message">
          <div class="message-controls">
            <div class="message-control react" />
            <div class="message-control more" />
          </div>
          <div class="avatar-column">
            <div class="avatar" />
          </div>
          <div class="content-column">
            <h2 class="message-header"><span class="username">Member 1</span> <span class="timestamp-cozy">Today at 9:42 PM</span></h2>
            <div class="markup">Hello! This is a static mockup of discord designed to test palettes with Slate. You can view more documetation about palettes here: <a href="https://github.com/DiscordStyles/Slate/wiki">https://github.com/DiscordStyles/Slate/wiki</a></div>
          </div>
        </div>
      </div>
      <div class="chat-textarea">
        <div class="avatar" />
        <input placeholder="Send a message" />
      </div>
    </section>
    <aside class="members sidebar">
      <div class="members-content container-content">
        <div class="category">Role—1</div>
        <div class="sidebar-entry">
          <div class="avatar" />
          <div class="entry-label">Member 1</div>
        </div>
        <div class="sidebar-entry">
          <div class="avatar" />
          <div class="entry-label">Member 2</div>
        </div>
        <div class="sidebar-entry">
          <div class="avatar" />
          <div class="entry-label">Member 3</div>
        </div>
      </div>
    </aside>
  </main>
</div>
