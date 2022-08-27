const candidate = [
    { Name: "Abul", job: 'sorkari', salary: 17000 },
    { Name: "Babul", job: 'besorkari', salary: 25000 },
    { Name: "Kabul", job: 'sorkari', salary: 21000 },
    { Name: "Habul", job: 'besorkari', salary: 47000 },
    { Name: "Jabul", job: 'sorkari', salary: 23000 },
    { Name: "Mabul", job: 'besorkari', salary: 55000 }
]

const selected = candidate.filter(sele => sele.job === 'sorkari' && sele.salary >= 20000 || sele.job === 'besorkari' && sele.salary >= 40000);

selected.map(vaggoban => {
    const { Name } = vaggoban;
    console.log(Name);
})