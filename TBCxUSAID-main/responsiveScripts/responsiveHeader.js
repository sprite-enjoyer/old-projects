if (header.clientWidth < 900) {
  const headerButtonGroup = document.getElementById("header-button-group");
  headerButtonGroup.remove();

  const mobileHeaderDrawer = document.getElementById("mobile-header-drawer");
  mobileHeaderDrawer.appendChild(headerButtonGroup);
  const drawerButton = document.getElementById("mobile-drawer-button");

  let drawerOpen = false;

  const toggleMobileHeaderDialog = () => {
    const [div1, div2, div3] = document.getElementsByClassName(
      "mobile-drawer-button-div"
    );
    div1.classList.toggle("mobile-drawer-open-button-div-first");
    div2.classList.toggle("mobile-drawer-open-button-div-second");
    div3.classList.toggle("mobile-drawer-open-button-div-third");

    drawerButton.classList.toggle("mobile-drawer-button-open");

    if (drawerOpen) {
      mobileHeaderDrawer.classList.remove("mobile-header-drawer-open");
      mobileHeaderDrawer.classList.add("mobile-header-drawer-closed");
      drawerOpen = false;
      return;
    }

    mobileHeaderDrawer.classList.remove("mobile-header-drawer-closed");
    mobileHeaderDrawer.classList.add("mobile-header-drawer-open");
    drawerOpen = true;
  };

  const drawerOutsideClickHandler = (event) => {
    if (
      mobileHeaderDrawer.contains(event.target) ||
      event.target.contains(drawerButton) ||
      !drawerOpen
    )
      return;
    toggleMobileHeaderDialog();
  };

  document.body.onclick = drawerOutsideClickHandler;
  drawerButton.onclick = toggleMobileHeaderDialog;
}
