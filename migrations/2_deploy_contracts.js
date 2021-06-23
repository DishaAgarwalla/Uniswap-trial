const UniswapV2Router = artifacts.require('UniswapV2Router02.sol');
// const WETH = artifacts.require('WETH9');

module.exports = async (deployer) => {
    // deployer.deploy(DAI, 1337);
    // deployer.deploy(
    //     UniswapV2Factory, // 0x76035554a30dc53B687e66838526aa789FC9683F
    //     '0x357C8cbbcF925aB27870403E554160afa0396ad2' // accounts[1]
    // );
    // const factory = await UniswapV2Factory.deployed();
    // await factory.createPair();
    deployer.deploy(
        UniswapV2Router,
        '0x76035554a30dc53B687e66838526aa789FC9683F', // factory in local
        '0xAE349dD41Ebc1C1450FB1c2cA6b704A81F55C8B3' // WETH in local
    );
    // deployer.deploy(WETH); // 0xAE349dD41Ebc1C1450FB1c2cA6b704A81F55C8B3
};
