document.addEventListener("DOMContentLoaded", function() {
  const videoGrid = document.getElementById("video-grid");

  const videos = [
      { title: "Video 1", thumbnail: "thumbnail-1.jpg" },
      { title: "Video 2", thumbnail: "thumbnail-2.jpg" },
      { title: "Video 3", thumbnail: "thumbnail-3.jpg" },
      { title: "Video 4", thumbnail: "thumbnail-4.jpg" },
      { title: "Video 5", thumbnail: "thumbnail-5.jpg" },
      { title: "Video 6", thumbnail: "thumbnail-6.jpg" },
      { title: "Video 7", thumbnail: "thumbnail-7.jpg" },
      { title: "Video 8", thumbnail: "thumbnail-8.jpg" },
      { title: "Video 9", thumbnail: "thumbnail-9.jpg" },
      { title: "Video 10", thumbnail: "thumbnail-10.jpg" },

  ];

  videos.forEach(video => {
      const videoThumb = document.createElement("div");
      videoThumb.className = "video-thumb";
      
      const thumbnail = document.createElement("img");
      thumbnail.src = video.thumbnail;
      thumbnail.alt = video.title;

      const title = document.createElement("h4");
      title.textContent = video.title;

      videoThumb.appendChild(thumbnail);
      videoThumb.appendChild(title);
      videoGrid.appendChild(videoThumb);
  });
});
