import React from "react";

function About() {
  return (
    <div id="about" className="w3-container">
      <h2>About</h2>
      <p>
        For a brief time in late 2017, a light was dimmed on the Internet. That
        light was:
      </p>
      <a href="http://bobrosslipsum.com/" target="_blank" rel="noreferrer">
        http://bobrosslipsum.com/
      </a>
      <p>
        My team and I relied on that site's inspiration to help keep us focused
        and motivated throughout each and every workday. When it stopped
        working, I considered it a happy accident, and spent a weekend standing
        up this site as an alternative. It's full of quotes I gathered from
        re-watching episodes on youtube.
      </p>
      <p>
        Shortly after completing initial work on the site, bobrosslipsum.com was
        working again, good as new. I've chosen to keep this site up and running
        for the time being, because the Internet can use all of the Bob Ross it
        can get!
      </p>
      <p>
        One last thing: this site is open-source. Have a look at the following
        github link if you want to see how it's implemented. Happy coding!
      </p>
      <a
        href="https://github.com/rusty-software/bobrosslipsum"
        target="_blank"
        rel="noreferrer"
      >
        https://github.com/rusty-software/bobrosslipsum
      </a>
    </div>
  );
}

export default About;
