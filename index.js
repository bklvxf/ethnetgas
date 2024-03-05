// 示例：使用ethers获取gas价格
const ethers = require('ethers');

async function getGasPrice() {
    const provider = new ethers.providers.EtherscanProvider();
    const gasPrice = await provider.getGasPrice();
    // 转换和处理gas价格
    return {
        low: gasPrice, // 示例值，您需要根据实际情况调整
        medium: gasPrice, // 示例值
        high: gasPrice // 示例值
    };
}

module.exports = { getGasPrice };
