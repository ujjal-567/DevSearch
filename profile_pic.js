// Handles profile picture upload and preview for profile.html
function handleProfilePicUpload(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(e) {
    const img = document.getElementById('profilePicPreview');
    if (img) img.src = e.target.result;
    // Save to localStorage for demo (in real app, upload to server)
    const user = getStoredUser();
    if (user) {
      user.profilePic = e.target.result;
      localStorage.setItem('devsearchUser', JSON.stringify(user));
    }
  };
  reader.readAsDataURL(file);
}

// Loads the profile picture from localStorage if available
function loadProfilePic() {
  const user = getStoredUser && getStoredUser();
  const img = document.getElementById('profilePicPreview');
  if (user && user.profilePic && img) {
    img.src = user.profilePic;
  }
}
