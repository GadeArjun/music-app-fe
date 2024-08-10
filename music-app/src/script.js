import puppeteer from "puppeteer";

 async function searchYouTube(searchQuery) {
  // Launch the browser
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Navigate to YouTube
  await page.goto("https://www.youtube.com/");

  // Enter the search query and submit
  await page.type("input#search", searchQuery);
  await page.click("button#search-icon-legacy");
  await page.waitForSelector("ytd-video-renderer", { timeout: 15000 }); // Wait for videos to be rendered

  // Extract video details
  const results = await page.evaluate(() => {
    const videoElements = document.querySelectorAll("ytd-video-renderer");
    const videos = [];

    videoElements.forEach((video) => {
      const titleElement = video.querySelector("#video-title");
      const thumbnailElement = video.querySelector("yt-image img");
      const durationElement = video.querySelector("div.badge-shape-wiz__text");

      const title = titleElement ? titleElement.innerText.trim() : "No title";
      const url = titleElement ? titleElement.href : "No URL";
      const thumbnail = thumbnailElement
        ? thumbnailElement.src
        : "No thumbnail";
      const duration = durationElement
        ? durationElement.innerText.trim()
        : "No duration";

      videos.push({ title, url, thumbnail, duration });
    });

    return videos.slice(0, 5); // Return the top 5 results
  });

  // Print the top 5 videos
  await browser.close();

  return results;
}

// Example usage:
searchYouTube("Trending Songs")

