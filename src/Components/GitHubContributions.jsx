import React, { useEffect, useState } from "react";

const GITHUB_API = "https://github-contributions-api.jogruber.de/v4/";

const LEVELS = ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"];

const parseWeeks = (data) => {
  if (!data?.contributions) return [];
  const weeks = [];
  let week = [];
  data.contributions.forEach((day, i) => {
    week.push(day);
    if (week.length === 7 || i === data.contributions.length - 1) {
      weeks.push(week);
      week = [];
    }
  });
  return weeks;
};

const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

const GitHubContributions = ({ username }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`${GITHUB_API}${username}?y=last`)
      .then((r) => r.json())
      .then(setData)
      .catch(() => setError(true));
  }, [username]);

  const weeks = data ? parseWeeks(data) : [];
  const total = data?.total?.lastYear ?? 0;

  const monthLabels = [];
  if (weeks.length) {
    let lastMonth = -1;
    weeks.forEach((week, wi) => {
      const m = new Date(week[0].date).getMonth();
      if (m !== lastMonth) {
        monthLabels.push({ wi, label: months[m] });
        lastMonth = m;
      }
    });
  }

  return (
    <section className="contributions-section" id="contributions">
      <div className="section-inner">
        <h2 className="section-title">GitHub Activity</h2>
        <p className="section-subtitle">
          {data ? `${total.toLocaleString()} contributions in the last year` : "Loading contributions…"}
        </p>

        {error && (
          <p style={{ textAlign: "center", color: "var(--text-muted)" }}>
            Couldn't load contribution data.{" "}
            <a href={`https://github.com/${username}`} target="_blank" rel="noopener noreferrer">
              View on GitHub →
            </a>
          </p>
        )}

        {!error && weeks.length > 0 && (
          <div className="calendar-scroll">
            <div className="calendar-wrapper">
              <div className="cal-month-row" style={{ gridTemplateColumns: `repeat(${weeks.length}, 15px)` }}>
                {weeks.map((_, wi) => {
                  const found = monthLabels.find((m) => m.wi === wi);
                  return <span key={wi} className="cal-month-label">{found ? found.label : ""}</span>;
                })}
              </div>
              <div className="cal-grid" style={{ gridTemplateColumns: `repeat(${weeks.length}, 15px)` }}>
                {weeks.map((week, wi) =>
                  week.map((day, di) => (
                    <div
                      key={`${wi}-${di}`}
                      className="cal-cell"
                      style={{ background: LEVELS[day.level] }}
                      title={`${day.count} contributions on ${day.date}`}
                    />
                  ))
                )}
              </div>
            </div>
            <div className="cal-legend">
              <span className="cal-legend-label">Less</span>
              {LEVELS.map((c) => (
                <div key={c} className="cal-cell" style={{ background: c }} />
              ))}
              <span className="cal-legend-label">More</span>
            </div>
          </div>
        )}

        {!error && (
          <div className="gh-link-row">
            <a
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="gh-profile-link"
            >
              View full profile on GitHub →
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default GitHubContributions;
