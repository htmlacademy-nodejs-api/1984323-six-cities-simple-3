import { Container } from 'inversify';
import { types } from '@typegoose/typegoose';
import { OfferEntity, OfferModel } from './offer.entity.js';
import { OfferServiceInterface } from './offer-service.interface.js';
import OfferService from './offer.service.js';
import { Component } from '../../type/component.type.js';
import { ControllerInterface } from '../../common/controller/controller.interface.js';
import OfferController from './offer.controller.js';

const offerContainer = new Container();

offerContainer.bind<OfferServiceInterface>(Component.OfferServiceInterface).to(OfferService);
offerContainer.bind<types.ModelType<OfferEntity>>(Component.OfferModel).toConstantValue(OfferModel);
offerContainer.bind<ControllerInterface>(Component.OfferController).to(OfferController).inSingletonScope();

export { offerContainer};
