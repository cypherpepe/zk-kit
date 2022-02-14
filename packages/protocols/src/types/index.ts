export type StrBigInt = string | bigint

export type Proof = {
  pi_a: StrBigInt[]
  pi_b: StrBigInt[][]
  pi_c: StrBigInt[]
  protocol: string
  curve: string
}

export type FullProof = {
  proof: Proof
  publicSignals: StrBigInt[]
}

export type SolidityProof = StrBigInt[]

export type SemaphoreWitness = {
  identityNullifier: StrBigInt
  identityTrapdoor: StrBigInt
  treeSiblings: StrBigInt[]
  treePathIndices: number[]
  externalNullifier: StrBigInt
  signalHash: StrBigInt
}