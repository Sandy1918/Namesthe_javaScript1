const parent = React.createElement("div", { className: "parent" }, [
  React.createElement("div", { className: "child" }, [
    React.createElement("h1", { className: "gp" }, "Student of Naruto"),
    React.createElement("h2", {}, "sandeep reddy bukka"),
  ]),
  React.createElement("div", { className: "child" }, [
    React.createElement("h3", {}, "GeninCoder"),
  ]),
]);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("Root"));
root.render(parent);
