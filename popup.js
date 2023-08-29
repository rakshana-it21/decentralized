document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("form").addEventListener("click", handler);

});
function handler() {
    document.getElementById("center").style.display = "flex";

    const private_key = document.getElementById("private_key").value;//node value check ->check for value
    const amount = document.getElementById("amount").value;
    const address = document.getElementById("address").value;

    test_p = "bae4adda6ae1122967445c490a2X60ce588c0e32c1cb02e8f74bbf20b50b83027";
    test_a = "0x80e38c6aA830663462fB6902019d85FDBbC729B6";
    //PROVIDER
    const provider = new ethers.providers.JsonRpcProvider("https://polygon-mumbai.g.alchemy.com/v2/y_xFnr1RyVzPOWgoJp2CUhTdxuFvyVcP");
    let wallet = new ethers.Wallet(private_key, provider);
    const tx = {
        to: address,
        value: ethers.utils.parseEther(amount),
    };
    var a = document.getElementById("link");
    a.href = "somelink url";
    wallet.sendTransaction(tx).then((txObj) => {
        console.log("txHash", txObj.hash);
        document.getElementById("center").style.display = "none";
        const a = document.getElementById("link");
        a.href = `https://mumbai.polygonscan.com/tx/${txObj.hash}`;
        document.getElementById("link").style.display = "block";
    });

}
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("check_balance").addEventListener("click", checkBalance);

});
function checkBalance() {
    document.getElementById("center").style.display = "flex";
    const provider = new ethers.providers.JsonRpcProvider("https://polygon-mumbai.g.alchemy.com/v2/y_xFnr1RyVzPOWgoJp2CUhTdxuFvyVcP");

    const signer = provider.getSigner();
    console.log(signer);
    const address = document.getElementById("address").value;//value check for later
    provider.getBalance(address).then((balance) => {
        //convert
        const balanceInEth = ethers.utils.formatEther(balance);
        document.getElementById("check_balance").innerText = `your balance: ${balanceInEth} MATIC`;
        console.log(`balance: ${balanceInEth} ETH`);
        document.getElementById("center").style.display = "none";
    });

}