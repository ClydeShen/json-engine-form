/**
 * To handle better perofrmance, we will use pure annotation to imporve tree shaking
 */
export enum FieldId {
    requestName = 'requestName',
    dueDateFinalCerficate = 'dueDateFinalCerficate',
    exporterId = 'exporterId',
    consigneeName = 'consigneeName',
    consigneeAddressStreet = 'consigneeAddressStreet',
    consigneeAddressCity = 'consigneeAddressCity',
    consigneeAddressPostcode = 'consigneeAddressPostcode',
    consigneeAddressCountry = 'consigneeAddressCountry',
    eoriNumber = 'eoriNumber',
    firstConsigneeName = 'firstConsigneeName',
    firstConsigneeStreet = 'firstConsigneeStreet',
    firstConsigneeCity = 'firstConsigneeCity',
    firstConsigneePostcode = 'firstConsigneePostcode',
    firstConsigneeCountry = 'firstConsigneeCountry',
    firstConsigneeId = 'firstConsigneeId',
    verifier = 'verifier',
    transportMethod = 'transportMethod',
    countryOfClearancePointOfEntryBorderControlPost = 'countryOfClearancePointOfEntryBorderControlPost',
    departureDateTime = 'departureDateTime',
    idOfTransport = 'idOfTransport',
    internationalTransportDocumentNumber = 'internationalTransportDocumentNumber',
    expectedArrivalDateTime = 'expectedArrivalDateTime',
    shipsFlagState = 'shipsFlagState',
    containerId = 'containerId',
    containerSealId = 'containerSealId',
    grossWeight = 'grossWeight',
    documentId = 'documentId',
    documentFilename = 'documentFilename',
    documentUploadInProgress = 'documentUploadInProgress',
    documentType = 'documentType',
    documentInformation = 'documentInformation',
    documentRelationshipType = 'documentRelationshipType',
    certificateDeliveryMethod = 'certificateDeliveryMethod',
    certificateSigningOffice = 'certificateSigningOffice',
    collectionMethod = 'collectionMethod',
    copies = 'copies',
    digitalScanRequired = 'digitalScanRequired',
    recipientAddressStreet = 'recipientAddressStreet',
    recipientCity = 'recipientCity',
    recipientPostcode = 'recipientPostcode',
    recipientCountry = 'recipientCountry',
    recipientContactName = 'recipientContactName',
    recipientEmail = 'recipientEmail',
    declarationDate = 'declarationDate',
    declarationName = 'declarationName',
    freightForwarderName = 'freightForwarderName',
    freightForwarderAddressStreet = 'freightForwarderAddressStreet',
    freightForwarderCity = 'freightForwarderCity',
    freightForwarderPostcode = 'freightForwarderPostcode',
    freightForwarderCountry = 'freightForwarderCountry',
    freightForwarderContactName = 'freightForwarderContactName',
    freightForwarderEmail = 'freightForwarderEmail',
    portOfDischarge = 'portOfDischarge',
    formatForShipping = 'formatForShipping',
    exportedByAnotherParty = 'exportedByAnotherParty',
    orderNumber = 'orderNumber',
    market = 'market',
    totalCases = 'totalCases',
    airwayBillVesselVoyageNumber = 'airwayBillVesselVoyageNumber',
  }
  
  /* #__PURE__ */ export const requestName = Object.freeze({
    _id: FieldId.requestName,
    requestPath: 'requestName',
    responsePath: 'requestName',
  });
  
  /* #__PURE__ */ export const dueDateFinalCerficate = Object.freeze({
    _id: FieldId.dueDateFinalCerficate,
    requestPath: 'certificateDelivery.dueDate',
    responsePath: 'certificateDelivery.dueDate',
  });
  
  /* #__PURE__ */ export const exporterId = Object.freeze({
    _id: FieldId.exporterId,
    requestPath: 'consignment.consignor.id',
    responsePath: 'consignment.consignor.id',
  });
  
  /* #__PURE__ */ export const consigneeName = Object.freeze({
    _id: FieldId.consigneeName,
    requestPath: 'consignment.consignee.name',
    responsePath: 'consignment.consignee.name',
  });
  
  /* #__PURE__ */ export const consigneeAddressStreet = Object.freeze({
    _id: FieldId.consigneeAddressStreet,
    requestPath: 'consignment.consignee.specifiedAddress.street',
    responsePath: 'consignment.consignee.specifiedAddress.street',
  });
  
  /* #__PURE__ */ export const consigneeAddressCity = Object.freeze({
    _id: FieldId.consigneeAddressCity,
    requestPath: 'consignment.consignee.specifiedAddress.city',
    responsePath: 'consignment.consignee.specifiedAddress.city',
  });
  
  /* #__PURE__ */ export const consigneeAddressPostcode = Object.freeze({
    _id: FieldId.consigneeAddressPostcode,
    requestPath: 'consignment.consignee.specifiedAddress.postcode',
    responsePath: 'consignment.consignee.specifiedAddress.postcode',
  });
  
  /* #__PURE__ */ export const consigneeAddressCountry = Object.freeze({
    _id: FieldId.consigneeAddressCountry,
    requestPath: 'consignment.consignee.specifiedAddress.countryId',
    responsePath: 'consignment.consignee.specifiedAddress.countryId',
  });
  
  /* #__PURE__ */ export const eoriNumber = Object.freeze({
    _id: FieldId.eoriNumber,
    requestPath: 'consignment.EORINumber',
    responsePath: 'consignment.EORINumber',
  });
  
  /* #__PURE__ */ export const firstConsigneeName = Object.freeze({
    _id: FieldId.firstConsigneeName,
    requestPath: 'consignment.delivery.name',
    responsePath: 'consignment.delivery.name',
  });
  
  /* #__PURE__ */ export const firstConsigneeStreet = Object.freeze({
    _id: FieldId.firstConsigneeStreet,
    requestPath: 'consignment.delivery.specifiedAddress.street',
    responsePath: 'consignment.delivery.specifiedAddress.street',
  });
  
  /* #__PURE__ */ export const firstConsigneeCity = Object.freeze({
    _id: FieldId.firstConsigneeCity,
    requestPath: 'consignment.delivery.specifiedAddress.city',
    responsePath: 'consignment.delivery.specifiedAddress.city',
  });
  
  /* #__PURE__ */ export const firstConsigneePostcode = Object.freeze({
    _id: FieldId.firstConsigneePostcode,
    requestPath: 'consignment.delivery.specifiedAddress.postcode',
    responsePath: 'consignment.delivery.specifiedAddress.postcode',
  });
  
  /* #__PURE__ */ export const firstConsigneeCountry = Object.freeze({
    _id: FieldId.firstConsigneeCountry,
    requestPath: 'consignment.delivery.specifiedAddress.countryId',
    responsePath: 'consignment.delivery.specifiedAddress.countryId',
  });
  
  /* #__PURE__ */ export const firstConsigneeId = Object.freeze({
    _id: FieldId.firstConsigneeId,
    requestPath: 'consignment.delivery.partyId',
    responsePath: 'consignment.delivery.partyId',
  });
  
  /* #__PURE__ */ export const verifier = Object.freeze({
    _id: FieldId.verifier,
    requestPath: 'consignment.verifier.partyId',
    responsePath: 'consignment.verifier.partyId',
  });
  
  /* #__PURE__ */ export const transportMethod = Object.freeze({
    _id: FieldId.transportMethod,
    requestPath: 'consignment.mainCarriageTransportMovements[0].mode',
    responsePath: 'consignment.mainCarriageTransportMovements[0].mode',
  });
  
  /* #__PURE__ */ export const countryOfClearancePointOfEntryBorderControlPost =
    Object.freeze({
      _id: FieldId.countryOfClearancePointOfEntryBorderControlPost,
      requestPath: 'consignment.unloadingBasePort.id',
      responsePath: 'consignment.unloadingBasePort.id',
    });
  
  /* #__PURE__ */ export const departureDateTime = Object.freeze({
    _id: FieldId.departureDateTime,
    requestPath: 'consignment.exportExitDateTime',
    responsePath: 'consignment.exportExitDateTime',
  });
  
  /* #__PURE__ */ export const idOfTransport = Object.freeze({
    _id: FieldId.idOfTransport,
    requestPath:
      'consignment.mainCarriageTransportMovements[0].usedTransportMeans',
    responsePath:
      'consignment.mainCarriageTransportMovements[0].usedTransportMeans',
  });
  
  /* #__PURE__ */ export const internationalTransportDocumentNumber =
    Object.freeze({
      _id: FieldId.internationalTransportDocumentNumber,
      requestPath: 'consignment.mainCarriageTransportMovements[0].reference',
      responsePath: 'consignment.mainCarriageTransportMovements[0].reference',
    });
  
  /* #__PURE__ */ export const expectedArrivalDateTime = Object.freeze({
    _id: FieldId.expectedArrivalDateTime,
    requestPath: 'consignment.expectedArrivalDateTime',
    responsePath: 'consignment.expectedArrivalDateTime',
  });
  
  /* #__PURE__ */ export const shipsFlagState = Object.freeze({
    _id: FieldId.shipsFlagState,
    requestPath:
      'consignment.mainCarriageTransportMovements[0].registeredCountry.id',
    responsePath:
      'consignment.mainCarriageTransportMovements[0].registeredCountry.id',
  });
  
  /* #__PURE__ */ export const containerId = Object.freeze({
    _id: FieldId.containerId,
    requestPath: 'consignment.containers[0].containerId',
    responsePath: 'consignment.containers[0].containerId',
  });
  /* #__PURE__ */ export const containerSealId = Object.freeze({
    _id: FieldId.containerSealId,
    requestPath: 'consignment.containers[0].affixedSeals[0].sealId',
    responsePath: 'consignment.containers[0].affixedSeals[0].sealId',
  });
  
  /* #__PURE__ */ export const grossWeight = Object.freeze({
    _id: FieldId.grossWeight,
    requestPath: 'consignment.grossWeight',
    responsePath: 'consignment.grossWeight',
  });
  
  /* #__PURE__ */ export const documentId = Object.freeze({
    _id: FieldId.documentId,
    requestPath: 'referencedDocuments[0].attachment',
    responsePath: 'referencedDocuments[0].attachment.id',
  });
  /* #__PURE__ */ export const documentFilename = Object.freeze({
    _id: FieldId.documentFilename,
    requestPath: null,
    responsePath: 'referencedDocuments[0].attachment.filename',
  });
  /* #__PURE__ */ export const documentUploadInProgress = Object.freeze({
    _id: FieldId.documentUploadInProgress,
    requestPath: null,
    responsePath: 'referencedDocuments[0].attachment.uploadInProgress',
  });
  /* #__PURE__ */ export const documentType = Object.freeze({
    _id: FieldId.documentType,
    requestPath: 'referencedDocuments[0].documentType',
    responsePath: 'referencedDocuments[0].documentType',
  });
  /* #__PURE__ */ export const documentInformation = Object.freeze({
    _id: FieldId.documentInformation,
    requestPath: 'referencedDocuments[0].information',
    responsePath: 'referencedDocuments[0].information',
  });
  /* #__PURE__ */ export const documentRelationshipType = Object.freeze({
    _id: FieldId.documentRelationshipType,
    requestPath: 'referencedDocuments[0].relationshipTypeCode',
    responsePath: null,
  });
  
  /* #__PURE__ */ export const certificateDeliveryMethod = Object.freeze({
    _id: FieldId.certificateDeliveryMethod,
    requestPath: 'certificateDelivery.certificateDeliveryMethod',
    responsePath: 'certificateDelivery.certificateDeliveryMethod',
  });
  
  /* #__PURE__ */ export const certificateSigningOffice = Object.freeze({
    _id: FieldId.certificateSigningOffice,
    requestPath: 'certificateDelivery.certificateSigningOffice',
    responsePath: 'certificateDelivery.certificateSigningOffice',
  });
  
  /* #__PURE__ */ export const collectionMethod = Object.freeze({
    _id: FieldId.collectionMethod,
    requestPath: 'certificateDelivery.collectionMethod',
    responsePath: 'certificateDelivery.collectionMethod',
  });
  
  /* #__PURE__ */ export const copies = Object.freeze({
    _id: FieldId.copies,
    requestPath: 'certificateDelivery.copies',
    responsePath: 'certificateDelivery.copies',
  });
  
  /* #__PURE__ */ export const digitalScanRequired = Object.freeze({
    _id: FieldId.digitalScanRequired,
    requestPath: 'certificateDelivery.digitalScanRequired',
    responsePath: 'certificateDelivery.digitalScanRequired',
  });
  
  /* #__PURE__ */ export const recipientAddressStreet = Object.freeze({
    _id: FieldId.recipientAddressStreet,
    requestPath: 'certificateDelivery.recipientAddress.street',
    responsePath: 'certificateDelivery.recipientAddress.street',
  });
  
  /* #__PURE__ */ export const recipientCity = Object.freeze({
    _id: FieldId.recipientAddressStreet,
    requestPath: 'certificateDelivery.recipientAddress.city',
    responsePath: 'certificateDelivery.recipientAddress.city',
  });
  
  /* #__PURE__ */ export const recipientPostcode = Object.freeze({
    _id: FieldId.recipientPostcode,
    requestPath: 'certificateDelivery.recipientAddress.postcode',
    responsePath: 'certificateDelivery.recipientAddress.postcode',
  });
  
  /* #__PURE__ */ export const recipientCountry = Object.freeze({
    _id: FieldId.recipientCountry,
    requestPath: 'certificateDelivery.recipientAddress.countryName',
    responsePath: 'certificateDelivery.recipientAddress.countryName',
  });
  
  /* #__PURE__ */ export const recipientContactName = Object.freeze({
    _id: 'recipientContactName',
    requestPath: 'certificateDelivery.recipientContactName',
    responsePath: 'certificateDelivery.recipientContactName',
  });
  
  /* #__PURE__ */ export const recipientEmail = Object.freeze({
    _id: 'recipientEmail',
    requestPath: 'certificateDelivery.recipientEmail',
    responsePath: 'certificateDelivery.recipientEmail',
  });
  
  /* #__PURE__ */ export const declarationDate = Object.freeze({
    _id: 'declarationDate',
    requestPath: 'exporterDeclaration.date',
    responsePath: 'exporterDeclaration.date',
  });
  /* #__PURE__ */ export const declarationName = Object.freeze({
    _id: 'declarationName',
    requestPath: 'exporterDeclaration.name',
    responsePath: 'exporterDeclaration.name',
  });
  
  /* #__PURE__ */ export const freightForwarderName = Object.freeze({
    _id: 'freightForwarderName',
    requestPath: 'consignment.carrier.name',
    responsePath: 'consignment.carrier.name',
  });
  
  /* #__PURE__ */ export const freightForwarderAddressStreet = Object.freeze({
    _id: 'freightForwarderAddressStreet',
    requestPath: 'consignment.carrier.specifiedAddress.street',
    responsePath: 'consignment.carrier.specifiedAddress.street',
  });
  
  /* #__PURE__ */ export const freightForwarderCity = Object.freeze({
    _id: 'freightForwarderCity',
    requestPath: 'consignment.carrier.specifiedAddress.city',
    responsePath: 'consignment.carrier.specifiedAddress.city',
  });
  
  /* #__PURE__ */ export const freightForwarderPostcode = Object.freeze({
    _id: 'freightForwarderPostcode',
    requestPath: 'consignment.carrier.specifiedAddress.postcode',
    responsePath: 'consignment.carrier.specifiedAddress.postcode',
  });
  
  /* #__PURE__ */ export const freightForwarderCountry = Object.freeze({
    _id: 'freightForwarderCountry',
    requestPath: 'consignment.carrier.specifiedAddress.countryId',
    responsePath: 'consignment.carrier.specifiedAddress.countryId',
  });
  
  /* #__PURE__ */ export const freightForwarderContactName = Object.freeze({
    _id: 'freightForwarderContactName',
    requestPath: 'consignment.carrier.definedContacts[0].personName',
    responsePath: 'consignment.carrier.definedContacts[0].personName',
  });
  
  /* #__PURE__ */ export const freightForwarderEmail = Object.freeze({
    _id: 'freightForwarderEmail',
    requestPath: 'consignment.carrier.definedContacts[0].email',
    responsePath: 'consignment.carrier.definedContacts[0].email',
  });
  
  /* #__PURE__ */ export const portOfDischarge = Object.freeze({
    _id: 'portOfDischarge',
    requestPath: 'consignment.unloadingBasePort.id',
    responsePath: 'consignment.unloadingBasePort.id',
  });
  
  /* #__PURE__ */ export const formatForShipping = Object.freeze({
    _id: 'formatForShipping',
    requestPath: 'consignment.wineConsignment.shippingFormat',
    responsePath: 'consignment.wineConsignment.shippingFormat',
  });
  
  /* #__PURE__ */ export const exportedByAnotherParty = Object.freeze({
    _id: 'exportedByAnotherParty',
    requestPath: 'requestedOnBehalfOfConsignor',
    responsePath: 'requestedOnBehalfOfConsignor',
  });
  
  /* #__PURE__ */ export const orderNumber = Object.freeze({
    _id: 'orderNumber',
    requestPath: 'consignment.consignorReference',
    responsePath: 'consignment.consignorReference',
  });
  
  /* #__PURE__ */ export const market = Object.freeze({
    _id: 'market',
    requestPath: 'market',
    responsePath: 'market',
  });
  /* #__PURE__ */ export const totalCases = Object.freeze({
    _id: 'totalCases',
    requestPath: 'consignment.wineConsignment.packaging.quantity',
    responsePath: 'consignment.wineConsignment.packaging.quantity',
  });
  
  /* #__PURE__ */ export const airwayBillVesselVoyageNumber = Object.freeze({
    _id: 'airwayBillVesselVoyageNumber',
    requestPath: 'consignment.mainCarriageTransportMovements[0].reference',
    responsePath: 'consignment.mainCarriageTransportMovements[0].reference',
  });
  