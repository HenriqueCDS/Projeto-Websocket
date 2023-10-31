import jwt from 'jsonwebtoken';

function gerarJWT(paylod) {
    const tokenJwt = jwt.sign(paylod, process.env.SEGREDO_JWT, {
        expiresIn: "1h",
      });
    return tokenJwt;
}
export default gerarJWT;