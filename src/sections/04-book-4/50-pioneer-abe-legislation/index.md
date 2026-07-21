# Final Challenge: Tracking the Money

In this final part of Honest Abe, you task is to list all politicians along with the following information for each one.

* Bills the politician has sponsored.
* PACs that have donated to the politician's campaign.
* Corporate influencers. Influencing corporations share the same interests as the politician's legislation, and have contributed to PACs that have contributed to the politician.

> **HINT:** We will give you **one** hint. You will need to use the <a href="https://attacomsian.com/blog/promise-all-javascript" target="_blank" rel="noopener noreferrer">`Promise.all()`</a> method to <a href="https://appdividend.com/2019/01/03/javascript-promise-all-example-promise-all-tutorial/" target="_blank" rel="noopener noreferrer">resolve multiple fetch</a> calls at the same time.

```html
<article class="politicians">
    <section>
        <header class="politician__name">
            <h1>Charlene Harding</h1>
        </header>
        <div class="politician__info">
            <div>Age: 45</div>
            <div>Represents: Bethpage, Maine</div>
        </div>
        <div class="politician__bills">
            <h2>Sponsored Bills</h2>
            <div>
                H.R. 5215: Veterans Affairs Purchase Card Misuse Mitigation Act (Interest: Military)
            </div>
        </div>
        <div class="politician__funders">
            <h2>Related PACs</h2>
            <ul>
                <li>American Gas Association</li>
                <li>League of Conservation Voters Action Fund</li>
            </ul>
        </div>
        <div class="politician__influencers">
            <h3>Influencing Corporations</h3>
            <ul>
                <li>Lockheed Martin</li>
                <li>Boeing</li>
            </ul>
        </div>
    </section>
</article>
```
