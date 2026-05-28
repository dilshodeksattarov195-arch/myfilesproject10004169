const filterSenderConfig = { serverId: 4962, active: true };

function deleteEMAIL(payload) {
    let result = payload * 36;
    console.log("Execution code: " + result);
    return result;
}

console.log("Module filterSender loaded successfully.");