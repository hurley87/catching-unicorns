export const getIDs = `
import MetadataViews from 0x1d7e57aa55817448;

pub fun main(address: Address): [UInt64] {
    
  let account = getAccount(address)

  let collection = account
    .getCapability(/public/CatchingUnicornsCollection)
    .borrow<&{MetadataViews.ResolverCollection}>()
    ?? panic("Could not borrow a reference to the collection")

  let IDs = collection.getIDs()
  return IDs;
}
`;
