import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  File: any;
  ISO8601Date: any;
  ISO8601DateTime: any;
  Json: any;
  WeiAmount: any;
};

/** An Account */
export type Account = Node & {
  __typename?: 'Account';
  accountable: Accountable;
  id: Scalars['ID'];
  /** @deprecated Use id field */
  oldId?: Maybe<Scalars['String']>;
  owner?: Maybe<AccountOwner>;
};

/** Object that can be an account owner */
export type AccountOwner = Contract | User;

/** Object that can be an account accountable */
export type Accountable = CommonAccount | EthereumAccount | LoomAccount | StarkwareAccount;

export enum Action {
  Activity = 'ACTIVITY'
}

/** An action reward */
export type ActionReward = Node & {
  __typename?: 'ActionReward';
  action: Action;
  id: Scalars['ID'];
  pickSize: Scalars['Int'];
  /** The `pickable_players` field cannot be nested within a list. */
  pickablePlayers: Array<PickablePlayer>;
  /** The `reward_cards` field cannot be nested within a list. */
  rewardCards: Array<RewardCard>;
  shippingState: ShippingState;
};

/** An object representing the activity action reward status of a user */
export type ActivityActionRewardStatus = {
  __typename?: 'ActivityActionRewardStatus';
  claimedCount: Scalars['Int'];
  limit: Scalars['Int'];
  nextAt?: Maybe<Scalars['ISO8601DateTime']>;
};

export type Age = {
  __typename?: 'Age';
  cutOffDate: Scalars['ISO8601Date'];
  max?: Maybe<Scalars['Int']>;
  min?: Maybe<Scalars['Int']>;
};

/** An announcement */
export type Announcement = Node & {
  __typename?: 'Announcement';
  content: Scalars['String'];
  createdAt: Scalars['ISO8601DateTime'];
  id: Scalars['ID'];
  title: Scalars['String'];
};

/** The connection type for Announcement. */
export type AnnouncementConnection = {
  __typename?: 'AnnouncementConnection';
  /** A list of edges. */
  edges: Array<AnnouncementEdge>;
  /** A list of nodes. */
  nodes: Array<Announcement>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type AnnouncementEdge = {
  __typename?: 'AnnouncementEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<Announcement>;
};

/** A user notification regarding an Announcement */
export type AnnouncementNotification = Node & NotificationInterface & {
  __typename?: 'AnnouncementNotification';
  announcement: Announcement;
  createdAt: Scalars['ISO8601DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  read: Scalars['Boolean'];
  user: CurrentUser;
};

/** An anonymous User */
export type AnonymousUser = BlockchainUserInterface & Node & {
  __typename?: 'AnonymousUser';
  cardsCount: Scalars['Int'];
  ethVaultId?: Maybe<Scalars['Int']>;
  ethereumAddress: Scalars['String'];
  id: Scalars['ID'];
  sorareAddress?: Maybe<Scalars['String']>;
  starkKey?: Maybe<Scalars['String']>;
  starkKeyRegistered: Scalars['Boolean'];
};

/** A user notification regarding an Auction */
export type AuctionNotification = Node & NotificationInterface & {
  __typename?: 'AuctionNotification';
  auction: BundledAuction;
  bid?: Maybe<Bid>;
  createdAt: Scalars['ISO8601DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  read: Scalars['Boolean'];
  user: CurrentUser;
};

export enum AveragePlayerScore {
  LastFifteenSo5AverageScore = 'LAST_FIFTEEN_SO5_AVERAGE_SCORE',
  LastFiveSo5AverageScore = 'LAST_FIVE_SO5_AVERAGE_SCORE'
}

export type AverageScoreOpenBoundaries = {
  __typename?: 'AverageScoreOpenBoundaries';
  averageType: AveragePlayerScore;
  count: Scalars['Int'];
  max?: Maybe<Scalars['Int']>;
  min?: Maybe<Scalars['Int']>;
};

/** The average score players count rule of a So5Leaderboard */
export type AverageScorePlayersCount = {
  __typename?: 'AverageScorePlayersCount';
  /** @deprecated No longer maintained */
  max?: Maybe<AverageScoreOpenBoundaries>;
  /** @deprecated No longer maintained */
  min?: Maybe<AverageScoreOpenBoundaries>;
};

export enum Award {
  ChildhoodTeam = 'CHILDHOOD_TEAM',
  FavoriteNumber = 'FAVORITE_NUMBER',
  FirstComeFirstServed = 'FIRST_COME_FIRST_SERVED',
  FirstDip = 'FIRST_DIP',
  HighestBidder = 'HIGHEST_BIDDER',
  MakingItRain = 'MAKING_IT_RAIN',
  MatchingNumbers = 'MATCHING_NUMBERS',
  NationalService = 'NATIONAL_SERVICE',
  OutTheDoor = 'OUT_THE_DOOR',
  YourBiggestFan = 'YOUR_BIGGEST_FAN'
}

export enum AwardCategory {
  Collector = 'COLLECTOR',
  Manager = 'MANAGER'
}

export enum BaseballPosition {
  Catcher = 'CATCHER',
  DesignatedHitter = 'DESIGNATED_HITTER',
  FirstBase = 'FIRST_BASE',
  Outfield = 'OUTFIELD',
  ReliefPitcher = 'RELIEF_PITCHER',
  SecondBase = 'SECOND_BASE',
  Shortstop = 'SHORTSTOP',
  StartingPitcher = 'STARTING_PITCHER',
  ThirdBase = 'THIRD_BASE',
  Unknown = 'UNKNOWN'
}

/** A Bid in an auction */
export type Bid = Node & {
  __typename?: 'Bid';
  /** Bid amount, in wei. */
  amount: Scalars['String'];
  bidder?: Maybe<BlockchainUser>;
  createdAt: Scalars['ISO8601DateTime'];
  englishAuction: BundledAuction;
  fiatPayment: Scalars['Boolean'];
  id: Scalars['ID'];
};

/** The connection type for Bid. */
export type BidConnection = {
  __typename?: 'BidConnection';
  /** A list of edges. */
  edges: Array<BidEdge>;
  /** A list of nodes. */
  nodes: Array<Bid>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

/** An edge in a connection. */
export type BidEdge = {
  __typename?: 'BidEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<Bid>;
};

/** A bid with conversion rates */
export type BidWithRates = Node & {
  __typename?: 'BidWithRates';
  /** Bid amount, in wei. */
  amount: Scalars['String'];
  amountInFiat: Fiat;
  bidder?: Maybe<BlockchainUser>;
  createdAt: Scalars['ISO8601DateTime'];
  englishAuction: BundledAuction;
  fiatPayment: Scalars['Boolean'];
  id: Scalars['ID'];
};

export enum Blockchain {
  Ethereum = 'ETHEREUM',
  Loom = 'LOOM',
  NoBlockchain = 'NO_BLOCKCHAIN',
  Starkware = 'STARKWARE'
}

/** Object that have a blockchain address to interact with the platform */
export type BlockchainUser = AnonymousUser | User;

/** Blockchain info */
export type BlockchainUserInterface = {
  cardsCount: Scalars['Int'];
  ethVaultId?: Maybe<Scalars['Int']>;
  ethereumAddress: Scalars['String'];
  sorareAddress?: Maybe<Scalars['String']>;
  starkKey?: Maybe<Scalars['String']>;
  starkKeyRegistered: Scalars['Boolean'];
};

/** An Auction on a bundle of Cards */
export type BundledAuction = EnglishAuctionInterface & Node & {
  __typename?: 'BundledAuction';
  bestBid?: Maybe<BidWithRates>;
  /** The `bids` field cannot be nested within a list. */
  bids: BidConnection;
  bidsCount: Scalars['Int'];
  blockchainId: Scalars['String'];
  cancelled: Scalars['Boolean'];
  cards: Array<Card>;
  contentProvider?: Maybe<EnglishAuctionContentProvider>;
  creditCardFee: Scalars['Float'];
  /** Current price, in wei. */
  currentPrice: Scalars['String'];
  endDate: Scalars['ISO8601DateTime'];
  id: Scalars['ID'];
  /** Minimum next bid amount, in wei. */
  minNextBid: Scalars['String'];
  open: Scalars['Boolean'];
  slug: Scalars['String'];
  startDate: Scalars['ISO8601DateTime'];
};


/** An Auction on a bundle of Cards */
export type BundledAuctionBidsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** The connection type for BundledAuction. */
export type BundledAuctionConnection = {
  __typename?: 'BundledAuctionConnection';
  /** A list of edges. */
  edges: Array<BundledAuctionEdge>;
  /** A list of nodes. */
  nodes: Array<BundledAuction>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

/** An edge in a connection. */
export type BundledAuctionEdge = {
  __typename?: 'BundledAuctionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<BundledAuction>;
};

/** A card representing a professional football player */
export type Card = CardGameInterface & CardMarketInterface & CollectibleInterface & Node & WithPictureInterface & WithSubscriptionsInterface & {
  __typename?: 'Card';
  age?: Maybe<Scalars['Int']>;
  assetId?: Maybe<Scalars['String']>;
  /** @deprecated subscriptions do not scale if user dependent */
  belongsToUser: Scalars['Boolean'];
  birthTxHash?: Maybe<Scalars['String']>;
  blockchain: Scalars['String'];
  blockchainId?: Maybe<Scalars['String']>;
  canBuy: Scalars['Boolean'];
  /** @deprecated Not optimized */
  canSell: Scalars['Boolean'];
  cardEdition?: Maybe<CardEdition>;
  /** @deprecated Use cardEdition and layout instead */
  cardPrint?: Maybe<CardPrint>;
  /** @deprecated replaced by team */
  club?: Maybe<Club>;
  createdAt: Scalars['ISO8601DateTime'];
  /** @deprecated replaced by power breakdown */
  currentSeasonBonus: Scalars['Boolean'];
  /** @deprecated Use privateMinPrice */
  currentUserSingleBuyOfferMinPrice?: Maybe<SingleBuyOfferMinPrice>;
  currentUserSubscription?: Maybe<EmailSubscription>;
  /** @deprecated Use `gameForLeague` instead */
  gameForFixture?: Maybe<Game>;
  gameForLeague?: Maybe<Game>;
  /** Current card level */
  grade: Scalars['Int'];
  gradeAfterTransfer: Scalars['Int'];
  id: Scalars['ID'];
  inRollup: Scalars['Boolean'];
  latestEnglishAuction?: Maybe<EnglishAuction>;
  layout?: Maybe<CardLayout>;
  license: License;
  liveSingleBuyOffers: Array<Offer>;
  liveSingleSaleOffer?: Maybe<SingleSaleOffer>;
  myMintedSingleSaleOffer?: Maybe<SingleSaleOffer>;
  name: Scalars['String'];
  /** @deprecated Not needed. This info is provided in prepare mutations */
  nextVaultId?: Maybe<Scalars['Int']>;
  notContractOwners: Array<OwnerWithRates>;
  onSale: Scalars['Boolean'];
  openEnglishAuction?: Maybe<EnglishAuction>;
  openForDomesticStats: Scalars['Boolean'];
  openForGameStats: Scalars['Boolean'];
  openForGameStatsCompetitions: Array<Competition>;
  /** So5Lineup that this card is being used in for the open So5Fixture */
  openedSo5Lineup?: Maybe<So5Lineup>;
  owner?: Maybe<Owner>;
  ownerSince?: Maybe<Scalars['ISO8601DateTime']>;
  ownerWithRates?: Maybe<OwnerWithRates>;
  /** @deprecated use notContractOwners */
  owners: Array<Owner>;
  pendingWithdrawal?: Maybe<StarkwareWithdrawal>;
  pictureUrl?: Maybe<Scalars['String']>;
  player: Player;
  /** @deprecated injury data not reliable */
  playerInjuries: Array<Injury>;
  /** The `player_season_picture` field cannot be nested within a list. */
  playerSeasonPicture: SeasonPicture;
  position: Scalars['String'];
  /** Total card bonus (XP + Season bonus) */
  power: Scalars['String'];
  powerBreakdown: PowerBreakdown;
  powerMalusAfterTransfer: Scalars['String'];
  /** @deprecated not relevant */
  price: Scalars['String'];
  priceRange?: Maybe<Range>;
  privateMinPrice?: Maybe<Scalars['String']>;
  publicMinPrice?: Maybe<Scalars['String']>;
  /** @deprecated Use publicMinPrice */
  publicSingleBuyOfferMinPrice?: Maybe<SingleBuyOfferMinPrice>;
  rarity: Scalars['String'];
  /** @deprecated replaced by power breakdown */
  sameClubBonus: Scalars['Boolean'];
  /** @deprecated use the So5Scores of the player instead */
  scoreForPreviousFixture: Scalars['Int'];
  season: Season;
  serialNumber: Scalars['Int'];
  shirtNumber?: Maybe<Scalars['Int']>;
  singleCivilYear: Scalars['Boolean'];
  slug: Scalars['String'];
  starkwareTokenId?: Maybe<Scalars['String']>;
  subscriptionsCount: Scalars['Int'];
  team: Team;
  /** The `team_picture_url` field cannot be nested within a list. */
  teamPictureUrl?: Maybe<Scalars['String']>;
  tradeableStatus: Tradeable;
  u23Eligible: Scalars['Boolean'];
  user?: Maybe<User>;
  userOwner?: Maybe<UserOwner>;
  /** @deprecated replaced by ownerWithRate */
  userOwnerWithRate?: Maybe<UserOwnerWithRates>;
  /** @deprecated use notContractOwners */
  userOwners: Array<UserOwner>;
  /** @deprecated use notContractOwners */
  userOwnersWithRate: Array<UserOwnerWithRates>;
  /** @deprecated Not needed. This info is provided in prepare mutations */
  vaultId?: Maybe<Scalars['Int']>;
  visible: Scalars['Boolean'];
  walletStatus: WalletStatus;
  xp: Scalars['Int'];
  xpAfterTransfer: Scalars['Int'];
  /** XP start range of current card level */
  xpNeededForCurrentGrade: Scalars['Int'];
  /** XP end range of current card level */
  xpNeededForNextGrade?: Maybe<Scalars['Int']>;
};


/** A card representing a professional football player */
export type CardGameForFixtureArgs = {
  so5FixtureSlug?: InputMaybe<Scalars['String']>;
  so5LeaderboardSlug?: InputMaybe<Scalars['String']>;
};


/** A card representing a professional football player */
export type CardGameForLeagueArgs = {
  so5LeaderboardSlug?: InputMaybe<Scalars['String']>;
  so5LeagueSlug?: InputMaybe<Scalars['String']>;
};


/** A card representing a professional football player */
export type CardPictureUrlArgs = {
  derivative?: InputMaybe<Scalars['String']>;
};


/** A card representing a professional football player */
export type CardPowerArgs = {
  so5LeaderboardSlug?: InputMaybe<Scalars['String']>;
};


/** A card representing a professional football player */
export type CardPowerBreakdownArgs = {
  so5LeaderboardSlug?: InputMaybe<Scalars['String']>;
};


/** A card representing a professional football player */
export type CardScoreForPreviousFixtureArgs = {
  so5FixtureSlug: Scalars['String'];
};


/** A card representing a professional football player */
export type CardTeamPictureUrlArgs = {
  derivative?: InputMaybe<Scalars['String']>;
};

/** The connection type for Card. */
export type CardConnection = {
  __typename?: 'CardConnection';
  /** A list of edges. */
  edges: Array<CardEdge>;
  /** A list of nodes. */
  nodes: Array<Card>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** A user card count breakdown */
export type CardCount = {
  __typename?: 'CardCount';
  common: Scalars['Int'];
  limited: Scalars['Int'];
  rare: Scalars['Int'];
  superRare: Scalars['Int'];
  total: Scalars['Int'];
  unique: Scalars['Int'];
};

/** A card dropped during onboarding */
export type CardDrop = {
  __typename?: 'CardDrop';
  pictureUrl: Scalars['String'];
  slug: Scalars['String'];
};

/** An edge in a connection. */
export type CardEdge = {
  __typename?: 'CardEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<Card>;
};

/** Represents a card edition */
export type CardEdition = Node & WithPublicCardsInterface & {
  __typename?: 'CardEdition';
  /** The `cards` field cannot be nested within a list. */
  cards: CardConnection;
  displayName: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
};


/** Represents a card edition */
export type CardEditionCardsArgs = {
  after?: InputMaybe<Scalars['String']>;
  age?: InputMaybe<Scalars['Int']>;
  assetIds?: InputMaybe<Array<Scalars['String']>>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  owned?: InputMaybe<Scalars['Boolean']>;
  positions?: InputMaybe<Array<Position>>;
  rarities?: InputMaybe<Array<Rarity>>;
  serialNumber?: InputMaybe<Scalars['Int']>;
  shirtNumber?: InputMaybe<Scalars['Int']>;
  slugs?: InputMaybe<Array<Scalars['String']>>;
};

/** Enforces restrictions on specific card editions of submitted lineups */
export type CardEditionCount = {
  __typename?: 'CardEditionCount';
  /** The display name of the card edition on which this rule would apply */
  displayName: Scalars['String'];
  max?: Maybe<Scalars['Int']>;
  min?: Maybe<Scalars['Int']>;
  /** The name of the card edition on which this rule would apply */
  name: Scalars['String'];
};

/** Enforces restrictions on card editions of submitted lineups */
export type CardEditionsCount = {
  __typename?: 'CardEditionsCount';
  /** Card editions on which restrictions are applied with their additional restrictions, if any */
  editions: Array<CardEditionCount>;
  max?: Maybe<Scalars['Int']>;
  min?: Maybe<Scalars['Int']>;
};

/** Card Game Interface */
export type CardGameInterface = {
  gameForLeague?: Maybe<Game>;
  /** Current card level */
  grade: Scalars['Int'];
  gradeAfterTransfer: Scalars['Int'];
  /** So5Lineup that this card is being used in for the open So5Fixture */
  openedSo5Lineup?: Maybe<So5Lineup>;
  /** Total card bonus (XP + Season bonus) */
  power: Scalars['String'];
  powerBreakdown: PowerBreakdown;
  powerMalusAfterTransfer: Scalars['String'];
  u23Eligible: Scalars['Boolean'];
  xp: Scalars['Int'];
  xpAfterTransfer: Scalars['Int'];
  /** XP start range of current card level */
  xpNeededForCurrentGrade: Scalars['Int'];
  /** XP end range of current card level */
  xpNeededForNextGrade?: Maybe<Scalars['Int']>;
};


/** Card Game Interface */
export type CardGameInterfaceGameForLeagueArgs = {
  so5LeaderboardSlug?: InputMaybe<Scalars['String']>;
  so5LeagueSlug?: InputMaybe<Scalars['String']>;
};


/** Card Game Interface */
export type CardGameInterfacePowerArgs = {
  so5LeaderboardSlug?: InputMaybe<Scalars['String']>;
};


/** Card Game Interface */
export type CardGameInterfacePowerBreakdownArgs = {
  so5LeaderboardSlug?: InputMaybe<Scalars['String']>;
};

/** Represents a card layout */
export type CardLayout = {
  __typename?: 'CardLayout';
  backgroundMaskUrl?: Maybe<Scalars['String']>;
  backgroundUrl?: Maybe<Scalars['String']>;
  /** @deprecated Use layers instead */
  layerUrl?: Maybe<Scalars['String']>;
  layers: Array<Scalars['String']>;
  playerMaskUrl?: Maybe<Scalars['String']>;
  teamLogoUrl?: Maybe<Scalars['String']>;
};

/** Card Market Resolvers */
export type CardMarketInterface = {
  canBuy: Scalars['Boolean'];
  /** @deprecated Use privateMinPrice */
  currentUserSingleBuyOfferMinPrice?: Maybe<SingleBuyOfferMinPrice>;
  latestEnglishAuction?: Maybe<EnglishAuction>;
  liveSingleBuyOffers: Array<Offer>;
  liveSingleSaleOffer?: Maybe<SingleSaleOffer>;
  myMintedSingleSaleOffer?: Maybe<SingleSaleOffer>;
  onSale: Scalars['Boolean'];
  openEnglishAuction?: Maybe<EnglishAuction>;
  priceRange?: Maybe<Range>;
  privateMinPrice?: Maybe<Scalars['String']>;
  publicMinPrice?: Maybe<Scalars['String']>;
  /** @deprecated Use publicMinPrice */
  publicSingleBuyOfferMinPrice?: Maybe<SingleBuyOfferMinPrice>;
};

/** A user notification regarding a Card */
export type CardNotification = Node & NotificationInterface & {
  __typename?: 'CardNotification';
  card: Card;
  createdAt: Scalars['ISO8601DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  read: Scalars['Boolean'];
  user: CurrentUser;
  withdrawal?: Maybe<StarkwareWithdrawal>;
};

/** A CardOffer links a Card to an Offer */
export type CardOffer = Node & {
  __typename?: 'CardOffer';
  card?: Maybe<Card>;
  id: Scalars['ID'];
  offer: Offer;
  rarity: Scalars['String'];
};

/** Represents a print of a card */
export type CardPrint = Node & {
  __typename?: 'CardPrint';
  /** @deprecated Use card.layout instead */
  backgroundUrlByRarity: Scalars['Json'];
  cardEdition: CardEdition;
  /** @deprecated Use card.layout instead */
  clubUrl?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** @deprecated Use card.layout instead */
  layoutByRarity: RaritiesCardLayout;
  /** @deprecated Use card.layout instead */
  maskUrl?: Maybe<Scalars['String']>;
};


/** Represents a print of a card */
export type CardPrintBackgroundUrlByRarityArgs = {
  derivative?: InputMaybe<Scalars['String']>;
};

export enum CardQuality {
  Tier_0 = 'TIER_0',
  Tier_1 = 'TIER_1',
  Tier_2 = 'TIER_2',
  Tier_3 = 'TIER_3',
  Tier_4 = 'TIER_4'
}

/** The supply of cards for a Player in a Season */
export type CardSeasonSupply = {
  __typename?: 'CardSeasonSupply';
  limited: Scalars['Int'];
  player: Player;
  rare: Scalars['Int'];
  season: Season;
  superRare: Scalars['Int'];
  unique: Scalars['Int'];
};

/** A card representing a professional football player */
export type CardSubscription = CardGameInterface & CardMarketInterface & CollectibleInterface & Node & WithPictureInterface & WithSubscriptionsInterface & {
  __typename?: 'CardSubscription';
  age?: Maybe<Scalars['Int']>;
  assetId?: Maybe<Scalars['String']>;
  /** @deprecated subscriptions do not scale if user dependent */
  belongsToUser: Scalars['Boolean'];
  birthTxHash?: Maybe<Scalars['String']>;
  blockchain: Scalars['String'];
  blockchainId?: Maybe<Scalars['String']>;
  canBuy: Scalars['Boolean'];
  /** @deprecated Not optimized */
  canSell: Scalars['Boolean'];
  cardEdition?: Maybe<CardEdition>;
  /** @deprecated Use cardEdition and layout instead */
  cardPrint?: Maybe<CardPrint>;
  /** @deprecated replaced by team */
  club?: Maybe<Club>;
  createdAt: Scalars['ISO8601DateTime'];
  /** @deprecated replaced by power breakdown */
  currentSeasonBonus: Scalars['Boolean'];
  /** @deprecated Use privateMinPrice */
  currentUserSingleBuyOfferMinPrice?: Maybe<SingleBuyOfferMinPrice>;
  currentUserSubscription?: Maybe<EmailSubscription>;
  eventType: CardWasUpdatedEvent;
  /** @deprecated Use `gameForLeague` instead */
  gameForFixture?: Maybe<Game>;
  gameForLeague?: Maybe<Game>;
  /** Current card level */
  grade: Scalars['Int'];
  gradeAfterTransfer: Scalars['Int'];
  id: Scalars['ID'];
  inRollup: Scalars['Boolean'];
  latestEnglishAuction?: Maybe<EnglishAuction>;
  layout?: Maybe<CardLayout>;
  license: License;
  liveSingleBuyOffers: Array<Offer>;
  liveSingleSaleOffer?: Maybe<SingleSaleOffer>;
  myMintedSingleSaleOffer?: Maybe<SingleSaleOffer>;
  name: Scalars['String'];
  /** @deprecated Not needed. This info is provided in prepare mutations */
  nextVaultId?: Maybe<Scalars['Int']>;
  notContractOwners: Array<OwnerWithRates>;
  onSale: Scalars['Boolean'];
  openEnglishAuction?: Maybe<EnglishAuction>;
  openForDomesticStats: Scalars['Boolean'];
  openForGameStats: Scalars['Boolean'];
  openForGameStatsCompetitions: Array<Competition>;
  /** So5Lineup that this card is being used in for the open So5Fixture */
  openedSo5Lineup?: Maybe<So5Lineup>;
  owner?: Maybe<Owner>;
  ownerSince?: Maybe<Scalars['ISO8601DateTime']>;
  ownerWithRates?: Maybe<OwnerWithRates>;
  /** @deprecated use notContractOwners */
  owners: Array<Owner>;
  pendingWithdrawal?: Maybe<StarkwareWithdrawal>;
  pictureUrl?: Maybe<Scalars['String']>;
  player: Player;
  /** @deprecated injury data not reliable */
  playerInjuries: Array<Injury>;
  /** The `player_season_picture` field cannot be nested within a list. */
  playerSeasonPicture: SeasonPicture;
  position: Scalars['String'];
  /** Total card bonus (XP + Season bonus) */
  power: Scalars['String'];
  powerBreakdown: PowerBreakdown;
  powerMalusAfterTransfer: Scalars['String'];
  /** @deprecated not relevant */
  price: Scalars['String'];
  priceRange?: Maybe<Range>;
  privateMinPrice?: Maybe<Scalars['String']>;
  publicMinPrice?: Maybe<Scalars['String']>;
  /** @deprecated Use publicMinPrice */
  publicSingleBuyOfferMinPrice?: Maybe<SingleBuyOfferMinPrice>;
  rarity: Scalars['String'];
  /** @deprecated replaced by power breakdown */
  sameClubBonus: Scalars['Boolean'];
  /** @deprecated use the So5Scores of the player instead */
  scoreForPreviousFixture: Scalars['Int'];
  season: Season;
  serialNumber: Scalars['Int'];
  shirtNumber?: Maybe<Scalars['Int']>;
  singleCivilYear: Scalars['Boolean'];
  slug: Scalars['String'];
  starkwareTokenId?: Maybe<Scalars['String']>;
  subscriptionsCount: Scalars['Int'];
  team: Team;
  /** The `team_picture_url` field cannot be nested within a list. */
  teamPictureUrl?: Maybe<Scalars['String']>;
  tradeableStatus: Tradeable;
  u23Eligible: Scalars['Boolean'];
  user?: Maybe<User>;
  userOwner?: Maybe<UserOwner>;
  /** @deprecated replaced by ownerWithRate */
  userOwnerWithRate?: Maybe<UserOwnerWithRates>;
  /** @deprecated use notContractOwners */
  userOwners: Array<UserOwner>;
  /** @deprecated use notContractOwners */
  userOwnersWithRate: Array<UserOwnerWithRates>;
  /** @deprecated Not needed. This info is provided in prepare mutations */
  vaultId?: Maybe<Scalars['Int']>;
  visible: Scalars['Boolean'];
  walletStatus: WalletStatus;
  xp: Scalars['Int'];
  xpAfterTransfer: Scalars['Int'];
  /** XP start range of current card level */
  xpNeededForCurrentGrade: Scalars['Int'];
  /** XP end range of current card level */
  xpNeededForNextGrade?: Maybe<Scalars['Int']>;
};


/** A card representing a professional football player */
export type CardSubscriptionGameForFixtureArgs = {
  so5FixtureSlug?: InputMaybe<Scalars['String']>;
  so5LeaderboardSlug?: InputMaybe<Scalars['String']>;
};


/** A card representing a professional football player */
export type CardSubscriptionGameForLeagueArgs = {
  so5LeaderboardSlug?: InputMaybe<Scalars['String']>;
  so5LeagueSlug?: InputMaybe<Scalars['String']>;
};


/** A card representing a professional football player */
export type CardSubscriptionPictureUrlArgs = {
  derivative?: InputMaybe<Scalars['String']>;
};


/** A card representing a professional football player */
export type CardSubscriptionPowerArgs = {
  so5LeaderboardSlug?: InputMaybe<Scalars['String']>;
};


/** A card representing a professional football player */
export type CardSubscriptionPowerBreakdownArgs = {
  so5LeaderboardSlug?: InputMaybe<Scalars['String']>;
};


/** A card representing a professional football player */
export type CardSubscriptionScoreForPreviousFixtureArgs = {
  so5FixtureSlug: Scalars['String'];
};


/** A card representing a professional football player */
export type CardSubscriptionTeamPictureUrlArgs = {
  derivative?: InputMaybe<Scalars['String']>;
};

export enum CardWasUpdatedEvent {
  /** When a bid was created on an auction */
  AuctionEventBid = 'auction_event_bid',
  /** When an auction is cancelled */
  AuctionEventCancelled = 'auction_event_cancelled',
  /** When an auction closes without bids */
  AuctionEventClosed = 'auction_event_closed',
  /** When an auction was successfully closed */
  AuctionEventSuccessfull = 'auction_event_successfull',
  /** When an offer is settled */
  OfferEventAccepted = 'offer_event_accepted',
  /** When an offer is cancelled */
  OfferEventCancelled = 'offer_event_cancelled',
  /** When an offer is cancelled */
  OfferEventFlagged = 'offer_event_flagged',
  /** When an offer becomes live */
  OfferEventOpened = 'offer_event_opened'
}

/** A challenge */
export type Challenge = Node & {
  __typename?: 'Challenge';
  completed?: Maybe<Scalars['Boolean']>;
  description: Scalars['String'];
  id: Scalars['ID'];
};

export type Club = Node & TeamInterface & WithSubscriptionsInterface & {
  __typename?: 'Club';
  activeCompetitions: Array<Competition>;
  /** The `active_memberships` field cannot be nested within a list. */
  activeMemberships: MembershipConnection;
  /** The `active_players` field cannot be nested within a list. */
  activePlayers: PlayerConnection;
  /** The `cards` field cannot be nested within a list. */
  cards: CardConnection;
  code?: Maybe<Scalars['String']>;
  /** @deprecated replaced by colorRight on customBanner */
  colorBottom?: Maybe<Scalars['String']>;
  /** @deprecated replaced by colorLeft on customBanner */
  colorTop?: Maybe<Scalars['String']>;
  country: Country;
  currentUserSubscription?: Maybe<EmailSubscription>;
  customBanner?: Maybe<CustomBanner>;
  domesticLeague?: Maybe<Competition>;
  founded?: Maybe<Scalars['String']>;
  /** The `games` field cannot be nested within a list. */
  games: GameConnection;
  id: Scalars['ID'];
  lastFiveGames: Array<Game>;
  /** The `latest_games` field cannot be nested within a list. */
  latestGames: GameConnection;
  /** @deprecated only exposed on cards */
  license: License;
  name: Scalars['String'];
  optaId?: Maybe<Scalars['String']>;
  pictureSecondaryUrl?: Maybe<Scalars['String']>;
  pictureUrl?: Maybe<Scalars['String']>;
  /** @deprecated Replaced teamPictureUrl on CardType */
  pictureUrlByRarity: Scalars['Json'];
  /** The `players` field cannot be nested within a list. */
  players: PlayerConnection;
  ready: Scalars['Boolean'];
  /** The `recent_departures` field cannot be nested within a list. */
  recentDepartures: PlayerConnection;
  slug: Scalars['String'];
  subscriptionsCount: Scalars['Int'];
  upcomingGames: Array<Maybe<Game>>;
};


export type ClubActiveMembershipsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type ClubActivePlayersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type ClubCardsArgs = {
  after?: InputMaybe<Scalars['String']>;
  age?: InputMaybe<Scalars['Int']>;
  assetIds?: InputMaybe<Array<Scalars['String']>>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  owned?: InputMaybe<Scalars['Boolean']>;
  positions?: InputMaybe<Array<Position>>;
  rarities?: InputMaybe<Array<Rarity>>;
  serialNumber?: InputMaybe<Scalars['Int']>;
  shirtNumber?: InputMaybe<Scalars['Int']>;
  slugs?: InputMaybe<Array<Scalars['String']>>;
};


export type ClubGamesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  endDate: Scalars['ISO8601DateTime'];
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  startDate: Scalars['ISO8601DateTime'];
};


export type ClubLatestGamesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type ClubPictureUrlArgs = {
  derivative?: InputMaybe<Scalars['String']>;
};


export type ClubPictureUrlByRarityArgs = {
  derivative?: InputMaybe<Scalars['String']>;
};


export type ClubPlayersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type ClubRecentDeparturesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type ClubUpcomingGamesArgs = {
  first: Scalars['Int'];
};

/** The connection type for Club. */
export type ClubConnection = {
  __typename?: 'ClubConnection';
  /** A list of edges. */
  edges: Array<ClubEdge>;
  /** A list of nodes. */
  nodes: Array<Club>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ClubEdge = {
  __typename?: 'ClubEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<Club>;
};

/** Collectible Resolvers */
export type CollectibleInterface = {
  cardEdition?: Maybe<CardEdition>;
  layout?: Maybe<CardLayout>;
};

/** A Common Account */
export type CommonAccount = Node & {
  __typename?: 'CommonAccount';
  id: Scalars['ID'];
};

/** A professional football competition */
export type Competition = Node & WithPictureInterface & {
  __typename?: 'Competition';
  /** The `clubs` field cannot be nested within a list. */
  clubs: ClubConnection;
  /** The `contestants` field cannot be nested within a list. */
  contestants: Array<Contestant>;
  country?: Maybe<Country>;
  customBanner?: Maybe<CustomBanner>;
  displayName: Scalars['String'];
  format: CompetitionFormat;
  id: Scalars['ID'];
  name: Scalars['String'];
  openForGameStats: Scalars['Boolean'];
  pictureUrl?: Maybe<Scalars['String']>;
  /** The `players_by_last_five_average` field cannot be nested within a list. */
  playersByLastFiveAverage: PlayerConnection;
  released: Scalars['Boolean'];
  /** The `seasons` field cannot be nested within a list. */
  seasons: Array<Season>;
  slug: Scalars['String'];
  type: CompetitionType;
};


/** A professional football competition */
export type CompetitionClubsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** A professional football competition */
export type CompetitionContestantsArgs = {
  seasonStartYear: Scalars['Int'];
};


/** A professional football competition */
export type CompetitionPictureUrlArgs = {
  derivative?: InputMaybe<Scalars['String']>;
};


/** A professional football competition */
export type CompetitionPlayersByLastFiveAverageArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export enum CompetitionFormat {
  DomesticCup = 'DOMESTIC_CUP',
  DomesticLeague = 'DOMESTIC_LEAGUE',
  DomesticSuperCup = 'DOMESTIC_SUPER_CUP',
  InternationalCup = 'INTERNATIONAL_CUP',
  InternationalSuperCup = 'INTERNATIONAL_SUPER_CUP'
}

export enum CompetitionType {
  Club = 'CLUB',
  International = 'INTERNATIONAL'
}

/** The frontend config */
export type Config = {
  __typename?: 'Config';
  /** @deprecated Migration completed */
  activateStarkware: Scalars['Boolean'];
  algoliaApplicationId: Scalars['String'];
  algoliaIndexSuffix: Scalars['String'];
  algoliaSearchApiKey: Scalars['String'];
  bankAddress: Scalars['String'];
  /** @deprecated Useless */
  cardPowerCap: Scalars['Float'];
  /** @deprecated Always enabled */
  cdnEnabled?: Maybe<Scalars['Boolean']>;
  /** @deprecated Draft does not exist anymore */
  draftMajorCompetitions: Array<Scalars['String']>;
  ethAssetType: Scalars['String'];
  ethQuantum: Scalars['String'];
  ethereumEndpoint: Scalars['String'];
  ethereumNetworkId: Scalars['String'];
  ethereumWsEndpoint: Scalars['String'];
  exchangeRate: ExchangeRate;
  frontendAssetsHost: Scalars['String'];
  id: Scalars['ID'];
  /** @deprecated Replaced by landingTheme */
  landingCards: Array<Scalars['String']>;
  landingClubCount: Scalars['String'];
  landingClubs: Array<LandingClub>;
  landingTheme: LandingTheme;
  migratorAddress?: Maybe<Scalars['String']>;
  /**
   * Fetch teams playing in the upcoming So5 Fixture
   * @deprecated Moved to so5
   */
  nextSo5FixtureTeams: Array<Team>;
  /** @deprecated Not maintained */
  powerHourStartDate?: Maybe<Scalars['ISO8601DateTime']>;
  referralCampaign?: Maybe<ReferralCampaign>;
  relayAddress: Scalars['String'];
  so5: So5Config;
  /** @deprecated Moved to so5 */
  so5LeaguesAlgoliaFilters: Scalars['Json'];
  sorareCardsAddress: Scalars['String'];
  sorareEncryptionKey: Scalars['String'];
  sorareTokensAddress: Scalars['String'];
  sponsorAccountAddress: Scalars['String'];
  starkExchangeAddress?: Maybe<Scalars['String']>;
  stripePublicKey: Scalars['String'];
  /** @deprecated Moved to TransferMarketType */
  transferMarketBanner?: Maybe<TransferMarketBanner>;
  walletUrl: Scalars['String'];
};

/** A contestant */
export type Contestant = Node & {
  __typename?: 'Contestant';
  id: Scalars['ID'];
  matchesDrawn?: Maybe<Scalars['Int']>;
  matchesLost?: Maybe<Scalars['Int']>;
  matchesPlayed?: Maybe<Scalars['Int']>;
  matchesWon?: Maybe<Scalars['Int']>;
  points?: Maybe<Scalars['Int']>;
  rank?: Maybe<Scalars['Int']>;
  team: Team;
};

/** A smart contract */
export type Contract = Node & {
  __typename?: 'Contract';
  addressHex: Scalars['String'];
  blockchain: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
};

/** A country */
export type Country = Node & WithSubscriptionsInterface & {
  __typename?: 'Country';
  /** Country code in ISO 3166-1 format. */
  code: Scalars['String'];
  currentUserSubscription?: Maybe<EmailSubscription>;
  id: Scalars['ID'];
  slug: Scalars['String'];
  subscriptionsCount: Scalars['Int'];
};

/** Credit Card */
export type CreditCard = {
  __typename?: 'CreditCard';
  brand: CreditCardBrand;
  expMonth: Scalars['Int'];
  expYear: Scalars['Int'];
  last4: Scalars['String'];
};

export enum CreditCardBrand {
  /** American Express */
  AmericanExpress = 'AMERICAN_EXPRESS',
  /** Cartes Bancaires */
  CartesBancaires = 'CARTES_BANCAIRES',
  /** Diners Club */
  DinersClub = 'DINERS_CLUB',
  /** Discover */
  Discover = 'DISCOVER',
  /** JCB */
  Jcb = 'JCB',
  /** MasterCard */
  Mastercard = 'MASTERCARD',
  /** UnionPay */
  UnionPay = 'UNION_PAY',
  /** Unknown */
  Unknown = 'UNKNOWN',
  /** Visa */
  Visa = 'VISA'
}

export enum Currency {
  Eth = 'ETH',
  Fiat = 'FIAT'
}

/** Current Sorare user */
export type CurrentUser = PublicUserInfoInterface & UserOffersInterface & UserSocialInterface & WithFastWithdrawal & WithFavoriteInterface & WithNotifications & WithReferralsInterface & {
  __typename?: 'CurrentUser';
  accountEntries: UserAccountEntryConnection;
  activeMintingQuota?: Maybe<MintingQuota>;
  activityActionRewardStatus?: Maybe<ActivityActionRewardStatus>;
  allTimeBestDecksInFormation: Array<DeckInFormation>;
  apiKey?: Maybe<Scalars['String']>;
  /** Current user available balance, in wei. */
  availableBalance: Scalars['String'];
  /** Current user available balance for withdrawal, in wei. */
  availableBalanceForWithdrawal: Scalars['String'];
  awards: Array<UserAward>;
  /** Current user bank balance, in wei. */
  bankBalance: Scalars['String'];
  bankMappedEthereumAddress?: Maybe<Scalars['String']>;
  bankMappedEthereumAddressApprovedBank?: Maybe<Scalars['Boolean']>;
  baseballProfile?: Maybe<UserSportProfile>;
  betaTester: Scalars['Boolean'];
  blockedUntil?: Maybe<Scalars['ISO8601DateTime']>;
  blockedUsers: UserConnection;
  /** The `bought_single_sale_offers` field cannot be nested within a list. */
  boughtSingleSaleOffers: SingleSaleOfferConnection;
  /** The `bought_single_sale_token_offers` field cannot be nested within a list. */
  boughtSingleSaleTokenOffers: TokenOfferConnection;
  /** The `buying_english_auctions` field cannot be nested within a list. */
  buyingEnglishAuctions: Array<EnglishAuction>;
  /** The `buying_token_auctions` field cannot be nested within a list. */
  buyingTokenAuctions: Array<TokenAuction>;
  cardCounts: CardCount;
  cardsCount: Scalars['Int'];
  coinBalance: Scalars['Int'];
  createdAt: Scalars['ISO8601DateTime'];
  /** The `custom_decks` field cannot be nested within a list. */
  customDecks: CustomDeckConnection;
  depositedEth: Scalars['Boolean'];
  directOffers: OfferConnection;
  email: Scalars['String'];
  endedDirectOffersReceived: OfferConnection;
  endedDirectOffersSent: OfferConnection;
  endedTokenOffersReceived: TokenOfferConnection;
  endedTokenOffersSent: TokenOfferConnection;
  /** The `ended_with_no_buyer_single_sale_offers` field cannot be nested within a list. */
  endedWithNoBuyerSingleSaleOffers: SingleSaleOfferConnection;
  /** The `ended_with_no_buyer_single_sale_token_offers` field cannot be nested within a list. */
  endedWithNoBuyerSingleSaleTokenOffers: TokenOfferConnection;
  /** The `english_auctions` field cannot be nested within a list. */
  englishAuctions: EnglishAuctionConnection;
  ethMigration?: Maybe<EthMigration>;
  ethVaultId?: Maybe<Scalars['Int']>;
  ethereumAddress: Scalars['String'];
  /** Get a starkware conditional transfer request for a fast withdrawal */
  fastWithdrawal: FastWithdrawal;
  fastWithdrawals: Array<FastWithdrawal>;
  fastWithdrawalsWithRates: Array<FastWithdrawalWithRates>;
  favoriteCards: Array<Card>;
  /** @deprecated Use `my_subscriptions` instead */
  favoriteClubs: Array<Club>;
  favoritePlayers: Array<Player>;
  fiatEnabled: Scalars['Boolean'];
  followed?: Maybe<EmailSubscription>;
  /** The `followers` field cannot be nested within a list. */
  followers: UserWithSubscriptionSlugConnection;
  followersCount: Scalars['Int'];
  /** The `following` field cannot be nested within a list. */
  following: UserWithSubscriptionSlugConnection;
  followingCount: Scalars['Int'];
  footballProfile?: Maybe<UserSportProfile>;
  fromPath?: Maybe<Scalars['String']>;
  highlightedDeck?: Maybe<HighlightedDeck>;
  id: Scalars['ID'];
  /** Generate a JWT Token */
  jwtToken: JwtToken;
  /**
   * The `live_single_sale_offers` field cannot be nested within a list.
   * @deprecated Use the paginated version instead
   */
  liveSingleSaleOffers: Array<SingleSaleOffer>;
  /** The `live_single_sale_token_offers` field cannot be nested within a list. */
  liveSingleSaleTokenOffers: TokenOfferConnection;
  /** The `lost_english_auctions` field cannot be nested within a list. */
  lostEnglishAuctions: EnglishAuctionConnection;
  /** The `lost_token_auctions` field cannot be nested within a list. */
  lostTokenAuctions: TokenAuctionConnection;
  moonpayParams: Scalars['String'];
  mustAcceptTcus: Scalars['Boolean'];
  /** @deprecated Not used */
  mySorareAlgoliaKey?: Maybe<Scalars['String']>;
  mySubscriptions: EmailSubscriptionConnection;
  nickname: Scalars['String'];
  notifications: NotificationConnection;
  /** Get notifications fields. */
  notificationsDetails: Notifications;
  onboardingStatus: Onboarding;
  otpBackupCodes?: Maybe<Array<Scalars['String']>>;
  otpProvisioningUri: Scalars['String'];
  otpRequiredForLogin: Scalars['Boolean'];
  /** The `paginated_cards` field cannot be nested within a list. */
  paginatedCards: CardConnection;
  /** The `paginated_live_single_sale_offers` field cannot be nested within a list. */
  paginatedLiveSingleSaleOffers: SingleSaleOfferConnection;
  paymentMethods: Array<PaymentMethod>;
  pendingDirectOffersReceived: OfferConnection;
  pendingDirectOffersSent: OfferConnection;
  pendingDirectWithdrawalCount: Scalars['Int'];
  pendingTokenOffersReceived: TokenOfferConnection;
  pendingTokenOffersSent: TokenOfferConnection;
  phoneNumber?: Maybe<Scalars['String']>;
  phoneNumberVerificationRequested: Scalars['Boolean'];
  phoneNumberVerified: Scalars['Boolean'];
  profile: UserProfile;
  rampSupported: Scalars['Boolean'];
  referee: Scalars['Boolean'];
  refereeReward?: Maybe<ReferralReward>;
  referralAsReferee?: Maybe<Referral>;
  referralRewardsCount: Scalars['Int'];
  /** Get the list of referrals */
  referrals: ReferralPaginated;
  referrer?: Maybe<User>;
  /** The `single_sale_offers` field cannot be nested within a list. */
  singleSaleOffers: SingleSaleOfferConnection;
  /** The `single_sale_token_offers` field cannot be nested within a list. */
  singleSaleTokenOffers: TokenOfferConnection;
  slug: Scalars['String'];
  /** The `sold_single_sale_offers` field cannot be nested within a list. */
  soldSingleSaleOffers: SingleSaleOfferConnection;
  /** The `sold_single_sale_token_offers` field cannot be nested within a list. */
  soldSingleSaleTokenOffers: TokenOfferConnection;
  sorareAddress?: Maybe<Scalars['String']>;
  sorareAddressApprovedBank: Scalars['Boolean'];
  sorareAddressApprovedBankPending?: Maybe<Scalars['String']>;
  sorarePrivateKey?: Maybe<SorarePrivateKey>;
  sorarePrivateKeyRecovery?: Maybe<Scalars['String']>;
  spentFiatPaymentIntents: PaymentConnection;
  starkKey?: Maybe<Scalars['String']>;
  starkKeyRegistered: Scalars['Boolean'];
  /** The `token_auctions` field cannot be nested within a list. */
  tokenAuctions: TokenAuctionConnection;
  tokenOffers: TokenOfferConnection;
  /** Current user total balance, in wei. */
  totalBalance: Scalars['String'];
  unclaimedActionRewards: Array<ActionReward>;
  unclaimedReferralRewardsCount: Scalars['Int'];
  unclaimedSo5Rewards: Array<So5Reward>;
  unreadNotificationsCount: Scalars['Int'];
  userSettings: UserSettings;
  withdrawals: Array<Withdrawal>;
  withdrawalsWithRates: Array<WithdrawalWithRates>;
  /** The `won_english_auctions` field cannot be nested within a list. */
  wonEnglishAuctions: EnglishAuctionConnection;
  /** The `won_token_auctions` field cannot be nested within a list. */
  wonTokenAuctions: TokenAuctionConnection;
};


/** Current Sorare user */
export type CurrentUserAccountEntriesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  endDate?: InputMaybe<Scalars['ISO8601DateTime']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  significant?: InputMaybe<Scalars['Boolean']>;
  sortType?: InputMaybe<SortingOption>;
  startDate?: InputMaybe<Scalars['ISO8601DateTime']>;
};


/** Current Sorare user */
export type CurrentUserBlockedUsersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** Current Sorare user */
export type CurrentUserBoughtSingleSaleOffersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortByEndDate?: InputMaybe<SortingOption>;
};


/** Current Sorare user */
export type CurrentUserBoughtSingleSaleTokenOffersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortByEndDate?: InputMaybe<SortingOption>;
  sport?: InputMaybe<Array<Sport>>;
};


/** Current Sorare user */
export type CurrentUserBuyingEnglishAuctionsArgs = {
  newlyListed?: InputMaybe<Scalars['Boolean']>;
};


/** Current Sorare user */
export type CurrentUserBuyingTokenAuctionsArgs = {
  newlyListed?: InputMaybe<Scalars['Boolean']>;
  sport?: InputMaybe<Array<Sport>>;
};


/** Current Sorare user */
export type CurrentUserCustomDecksArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** Current Sorare user */
export type CurrentUserDirectOffersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  direction: OfferDirection;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortType?: InputMaybe<SortingOption>;
};


/** Current Sorare user */
export type CurrentUserEndedDirectOffersReceivedArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortType?: InputMaybe<SortingOption>;
};


/** Current Sorare user */
export type CurrentUserEndedDirectOffersSentArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortType?: InputMaybe<SortingOption>;
};


/** Current Sorare user */
export type CurrentUserEndedTokenOffersReceivedArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortType?: InputMaybe<SortingOption>;
  sport?: InputMaybe<Array<Sport>>;
};


/** Current Sorare user */
export type CurrentUserEndedTokenOffersSentArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortType?: InputMaybe<SortingOption>;
  sport?: InputMaybe<Array<Sport>>;
};


/** Current Sorare user */
export type CurrentUserEndedWithNoBuyerSingleSaleOffersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortByEndDate?: InputMaybe<SortingOption>;
};


/** Current Sorare user */
export type CurrentUserEndedWithNoBuyerSingleSaleTokenOffersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortByEndDate?: InputMaybe<SortingOption>;
  sport?: InputMaybe<Array<Sport>>;
};


/** Current Sorare user */
export type CurrentUserEnglishAuctionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortByEndDate?: InputMaybe<SortingOption>;
};


/** Current Sorare user */
export type CurrentUserFastWithdrawalArgs = {
  amount: Scalars['String'];
  to: Scalars['String'];
};


/** Current Sorare user */
export type CurrentUserFollowersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** Current Sorare user */
export type CurrentUserFollowingArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** Current Sorare user */
export type CurrentUserJwtTokenArgs = {
  aud: Scalars['String'];
};


/** Current Sorare user */
export type CurrentUserLiveSingleSaleOffersArgs = {
  newlyListed?: InputMaybe<Scalars['Boolean']>;
};


/** Current Sorare user */
export type CurrentUserLiveSingleSaleTokenOffersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortByEndDate?: InputMaybe<SortingOption>;
  sport?: InputMaybe<Array<Sport>>;
};


/** Current Sorare user */
export type CurrentUserLostEnglishAuctionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortByEndDate?: InputMaybe<SortingOption>;
};


/** Current Sorare user */
export type CurrentUserLostTokenAuctionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortByEndDate?: InputMaybe<SortingOption>;
  sport?: InputMaybe<Array<Sport>>;
};


/** Current Sorare user */
export type CurrentUserMySubscriptionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortType?: InputMaybe<SortingOption>;
  types?: InputMaybe<Array<SubscribableType>>;
};


/** Current Sorare user */
export type CurrentUserNotificationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  categories?: InputMaybe<Array<NotificationCategoryInput>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** Current Sorare user */
export type CurrentUserNotificationsDetailsArgs = {
  categories?: InputMaybe<Array<NotificationCategoryInput>>;
};


/** Current Sorare user */
export type CurrentUserPaginatedCardsArgs = {
  after?: InputMaybe<Scalars['String']>;
  age?: InputMaybe<Scalars['Int']>;
  assetIds?: InputMaybe<Array<Scalars['String']>>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  owned?: InputMaybe<Scalars['Boolean']>;
  ownedSinceAfter?: InputMaybe<Scalars['ISO8601DateTime']>;
  positions?: InputMaybe<Array<Position>>;
  rarities?: InputMaybe<Array<Rarity>>;
  serialNumber?: InputMaybe<Scalars['Int']>;
  shirtNumber?: InputMaybe<Scalars['Int']>;
  slugs?: InputMaybe<Array<Scalars['String']>>;
};


/** Current Sorare user */
export type CurrentUserPaginatedLiveSingleSaleOffersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortByEndDate?: InputMaybe<SortingOption>;
};


/** Current Sorare user */
export type CurrentUserPendingDirectOffersReceivedArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortType?: InputMaybe<SortingOption>;
};


/** Current Sorare user */
export type CurrentUserPendingDirectOffersSentArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortType?: InputMaybe<SortingOption>;
};


/** Current Sorare user */
export type CurrentUserPendingTokenOffersReceivedArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortType?: InputMaybe<SortingOption>;
  sport?: InputMaybe<Array<Sport>>;
};


/** Current Sorare user */
export type CurrentUserPendingTokenOffersSentArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortType?: InputMaybe<SortingOption>;
  sport?: InputMaybe<Array<Sport>>;
};


/** Current Sorare user */
export type CurrentUserReferralsArgs = {
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  state?: InputMaybe<ReferralState>;
};


/** Current Sorare user */
export type CurrentUserSingleSaleOffersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortByEndDate?: InputMaybe<SortingOption>;
};


/** Current Sorare user */
export type CurrentUserSingleSaleTokenOffersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortByEndDate?: InputMaybe<SortingOption>;
  sport?: InputMaybe<Array<Sport>>;
};


/** Current Sorare user */
export type CurrentUserSoldSingleSaleOffersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortByEndDate?: InputMaybe<SortingOption>;
};


/** Current Sorare user */
export type CurrentUserSoldSingleSaleTokenOffersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortByEndDate?: InputMaybe<SortingOption>;
  sport?: InputMaybe<Array<Sport>>;
};


/** Current Sorare user */
export type CurrentUserSpentFiatPaymentIntentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  endDate?: InputMaybe<Scalars['ISO8601DateTime']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortType?: InputMaybe<SortingOption>;
  startDate?: InputMaybe<Scalars['ISO8601DateTime']>;
};


/** Current Sorare user */
export type CurrentUserTokenAuctionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortByEndDate?: InputMaybe<SortingOption>;
  sport?: InputMaybe<Array<Sport>>;
};


/** Current Sorare user */
export type CurrentUserTokenOffersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  direction: OfferDirection;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortType?: InputMaybe<SortingOption>;
  sport?: InputMaybe<Array<Sport>>;
};


/** Current Sorare user */
export type CurrentUserWonEnglishAuctionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortByEndDate?: InputMaybe<SortingOption>;
};


/** Current Sorare user */
export type CurrentUserWonTokenAuctionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortByEndDate?: InputMaybe<SortingOption>;
  sport?: InputMaybe<Array<Sport>>;
};

/** A custom banner */
export type CustomBanner = Node & {
  __typename?: 'CustomBanner';
  colorLeft?: Maybe<Scalars['String']>;
  colorRight?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
};

/** A custom deck */
export type CustomDeck = DeckInterface & Node & {
  __typename?: 'CustomDeck';
  /** The `cards` field cannot be nested within a list. */
  cards: CardConnection;
  cardsCount: Scalars['Int'];
  deckCards: DeckCardConnection;
  deckCardsCount: Scalars['Int'];
  deckIndex: Scalars['Int'];
  firstCard?: Maybe<Card>;
  id: Scalars['ID'];
  name: Scalars['String'];
  slug: Scalars['String'];
  user?: Maybe<User>;
  visible: Scalars['Boolean'];
};


/** A custom deck */
export type CustomDeckCardsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** A custom deck */
export type CustomDeckDeckCardsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** The connection type for CustomDeck. */
export type CustomDeckConnection = {
  __typename?: 'CustomDeckConnection';
  /** A list of edges. */
  edges: Array<CustomDeckEdge>;
  /** A list of nodes. */
  nodes: Array<CustomDeck>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type CustomDeckEdge = {
  __typename?: 'CustomDeckEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<CustomDeck>;
};

export enum CustomSortingOption {
  Custom = 'CUSTOM',
  Default = 'DEFAULT'
}

/** A decisive action notification */
export type DecisiveActionNotification = Node & NotificationInterface & {
  __typename?: 'DecisiveActionNotification';
  createdAt: Scalars['ISO8601DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  read: Scalars['Boolean'];
  rendering?: Maybe<TitleBodyNotificationRendering>;
  user: CurrentUser;
};

/** A deck card */
export type DeckCard = Node & {
  __typename?: 'DeckCard';
  card: Card;
  cardIndex?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  label?: Maybe<Scalars['String']>;
};

/** The connection type for DeckCard. */
export type DeckCardConnection = {
  __typename?: 'DeckCardConnection';
  /** A list of edges. */
  edges: Array<DeckCardEdge>;
  /** A list of nodes. */
  nodes: Array<DeckCard>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type DeckCardEdge = {
  __typename?: 'DeckCardEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<DeckCard>;
};

export enum DeckCategory {
  AllTimeBest = 'ALL_TIME_BEST',
  UserFavorite = 'USER_FAVORITE'
}

export enum DeckFormation {
  Free = 'FREE',
  OneOneTwo = 'ONE_ONE_TWO',
  OneTwoOne = 'ONE_TWO_ONE',
  TwoOneOne = 'TWO_ONE_ONE'
}

/** A card deck with a formation */
export type DeckInFormation = DeckInterface & Node & {
  __typename?: 'DeckInFormation';
  /** The `cards` field cannot be nested within a list. */
  cards: CardConnection;
  cardsCount: Scalars['Int'];
  category: DeckCategory;
  deckCards: DeckCardConnection;
  deckCardsCount: Scalars['Int'];
  firstCard?: Maybe<Card>;
  formation: DeckFormation;
  id: Scalars['ID'];
  pictureUrl?: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  user?: Maybe<User>;
};


/** A card deck with a formation */
export type DeckInFormationCardsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** A card deck with a formation */
export type DeckInFormationDeckCardsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type DeckInterface = {
  /** The `cards` field cannot be nested within a list. */
  cards: CardConnection;
  cardsCount: Scalars['Int'];
  deckCards: DeckCardConnection;
  deckCardsCount: Scalars['Int'];
  firstCard?: Maybe<Card>;
  id: Scalars['ID'];
  slug: Scalars['String'];
  user?: Maybe<User>;
};


export type DeckInterfaceCardsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type DeckInterfaceDeckCardsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** A user notification regarding a division change */
export type DivisionChangeNotification = Node & NotificationInterface & {
  __typename?: 'DivisionChangeNotification';
  createdAt: Scalars['ISO8601DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  nextSo5Leaderboard?: Maybe<So5Leaderboard>;
  previousSo5Leaderboard: So5Leaderboard;
  read: Scalars['Boolean'];
  user: CurrentUser;
};

/** A subscription to a Card/Club/Player/Country/User */
export type EmailSubscription = Node & {
  __typename?: 'EmailSubscription';
  id: Scalars['ID'];
  preferences: EmailSubscriptionPreferences;
  slug: Scalars['String'];
  subscribable?: Maybe<Subscribable>;
  subscribableSlug: Scalars['String'];
  subscribableType: Scalars['String'];
  subscriber?: Maybe<Subscriber>;
  updatedAt: Scalars['ISO8601DateTime'];
};

/** The connection type for EmailSubscription. */
export type EmailSubscriptionConnection = {
  __typename?: 'EmailSubscriptionConnection';
  /** A list of edges. */
  edges: Array<EmailSubscriptionEdge>;
  /** A list of nodes. */
  nodes: Array<EmailSubscription>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type EmailSubscriptionEdge = {
  __typename?: 'EmailSubscriptionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<EmailSubscription>;
};

/** A subscription preferences */
export type EmailSubscriptionPreferences = {
  __typename?: 'EmailSubscriptionPreferences';
  notifyForRarities: Array<Scalars['String']>;
  slug: Scalars['String'];
};

/** An engine configuration */
export type EngineConfiguration = {
  __typename?: 'EngineConfiguration';
  captain?: Maybe<Scalars['Float']>;
  grade?: Maybe<Scalars['Float']>;
  scarcity?: Maybe<Scalars['Json']>;
  season?: Maybe<Scalars['Float']>;
};

/** An EnglishAuction on a bundle of Cards */
export type EnglishAuction = EnglishAuctionInterface & Node & {
  __typename?: 'EnglishAuction';
  bestBid?: Maybe<BidWithRates>;
  /** The `bids` field cannot be nested within a list. */
  bids: BidConnection;
  bidsCount: Scalars['Int'];
  blockchainId: Scalars['String'];
  cancelled: Scalars['Boolean'];
  cards: Array<Card>;
  contentProvider?: Maybe<EnglishAuctionContentProvider>;
  creditCardFee: Scalars['Float'];
  /** Current price, in wei. */
  currentPrice: Scalars['String'];
  endDate: Scalars['ISO8601DateTime'];
  id: Scalars['ID'];
  /** Minimum next bid amount, in wei. */
  minNextBid: Scalars['String'];
  open: Scalars['Boolean'];
  slug: Scalars['String'];
  startDate: Scalars['ISO8601DateTime'];
};


/** An EnglishAuction on a bundle of Cards */
export type EnglishAuctionBidsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** The connection type for EnglishAuction. */
export type EnglishAuctionConnection = {
  __typename?: 'EnglishAuctionConnection';
  /** A list of edges. */
  edges: Array<EnglishAuctionEdge>;
  /** A list of nodes. */
  nodes: Array<EnglishAuction>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

/** Object that can be an EnglishAuction content provider */
export type EnglishAuctionContentProvider = Club | Competition | NationalTeam;

/** An edge in a connection. */
export type EnglishAuctionEdge = {
  __typename?: 'EnglishAuctionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<EnglishAuction>;
};

export type EnglishAuctionInterface = {
  bestBid?: Maybe<BidWithRates>;
  /** The `bids` field cannot be nested within a list. */
  bids: BidConnection;
  bidsCount: Scalars['Int'];
  blockchainId: Scalars['String'];
  cancelled: Scalars['Boolean'];
  cards: Array<Card>;
  contentProvider?: Maybe<EnglishAuctionContentProvider>;
  creditCardFee: Scalars['Float'];
  /** Current price, in wei. */
  currentPrice: Scalars['String'];
  endDate: Scalars['ISO8601DateTime'];
  id: Scalars['ID'];
  /** Minimum next bid amount, in wei. */
  minNextBid: Scalars['String'];
  open: Scalars['Boolean'];
  slug: Scalars['String'];
  startDate: Scalars['ISO8601DateTime'];
};


export type EnglishAuctionInterfaceBidsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** A withdrawal signature */
export type EthBankWithdrawalIntent = {
  __typename?: 'EthBankWithdrawalIntent';
  amount: Scalars['String'];
  nonce: Scalars['Int'];
  signature: Scalars['String'];
  user: CurrentUser;
};

/** Payload required to make a Starkware deposit */
export type EthDeposit = {
  __typename?: 'EthDeposit';
  assetType: Scalars['String'];
  starkKey: Scalars['String'];
  vaultId: Scalars['Int'];
  weiAmount: Scalars['WeiAmount'];
};

/** An ETH migration */
export type EthMigration = Node & {
  __typename?: 'EthMigration';
  aasmState: Scalars['String'];
  id: Scalars['ID'];
  nonce: Scalars['String'];
  weiAmount: Scalars['String'];
};

/** An Ethereum Account */
export type EthereumAccount = Node & {
  __typename?: 'EthereumAccount';
  address: Scalars['String'];
  id: Scalars['ID'];
  migratorApproved?: Maybe<Scalars['Boolean']>;
};

/** An Ethereum Transaction */
export type EthereumTransaction = Node & {
  __typename?: 'EthereumTransaction';
  confirmedAt: Scalars['ISO8601DateTime'];
  id: Scalars['ID'];
  status?: Maybe<TransactionStatus>;
  transactionHash: Scalars['String'];
};

/** A ETH/EUR exchange rate */
export type ExchangeRate = Node & {
  __typename?: 'ExchangeRate';
  id: Scalars['ID'];
  rates: Scalars['Json'];
  time: Scalars['ISO8601DateTime'];
};

/** A landmark as detected on a Player picture by face recognition */
export type FaceLandmark = {
  __typename?: 'FaceLandmark';
  type: Scalars['String'];
  x: Scalars['Float'];
  xInPx: Scalars['Float'];
  y: Scalars['Float'];
  yInPx: Scalars['Float'];
};

/** The starkware fast withdrawal as a ConditionalTransferRequest */
export type FastWithdrawal = Node & {
  __typename?: 'FastWithdrawal';
  amount: Scalars['String'];
  condition: Scalars['String'];
  createdAt: Scalars['ISO8601DateTime'];
  expirationTimestamp: Scalars['Int'];
  id: Scalars['ID'];
  nonce: Scalars['Int'];
  receiverPublicKey: Scalars['String'];
  receiverVaultId: Scalars['Int'];
  salt: Scalars['String'];
  senderVaultId: Scalars['Int'];
  status: WithdrawalStatus;
  to: Scalars['String'];
  token: Scalars['String'];
  transactionHash?: Maybe<Scalars['String']>;
};

/** The starkware fast withdrawal with rates as a ConditionalTransferRequest */
export type FastWithdrawalWithRates = Node & {
  __typename?: 'FastWithdrawalWithRates';
  amount: Scalars['String'];
  amountInFiat: Fiat;
  condition: Scalars['String'];
  createdAt: Scalars['ISO8601DateTime'];
  expirationTimestamp: Scalars['Int'];
  id: Scalars['ID'];
  nonce: Scalars['Int'];
  receiverPublicKey: Scalars['String'];
  receiverVaultId: Scalars['Int'];
  salt: Scalars['String'];
  senderVaultId: Scalars['Int'];
  status: WithdrawalStatus;
  to: Scalars['String'];
  token: Scalars['String'];
  transactionHash?: Maybe<Scalars['String']>;
};

/** Starkware fee representation */
export type Fee = {
  __typename?: 'Fee';
  feeLimit: Scalars['String'];
  sourceVaultId: Scalars['Int'];
  tokenId: Scalars['String'];
};

export type Fiat = {
  __typename?: 'Fiat';
  eur: Scalars['Float'];
  gbp: Scalars['Float'];
  usd: Scalars['Float'];
};

export enum FiatCurrency {
  Eur = 'EUR',
  Gbp = 'GBP',
  Usd = 'USD'
}

export enum FootballPosition {
  Coach = 'COACH',
  Defender = 'DEFENDER',
  Forward = 'FORWARD',
  Goalkeeper = 'GOALKEEPER',
  Midfielder = 'MIDFIELDER',
  Unknown = 'UNKNOWN'
}

/** The starkware Full withdrawal */
export type FullWithdrawalRequest = Node & {
  __typename?: 'FullWithdrawalRequest';
  id: Scalars['ID'];
  served: Scalars['Boolean'];
  valid: Scalars['Boolean'];
};

/** A professional football game */
export type Game = Node & {
  __typename?: 'Game';
  /** @deprecated Replaced by awayTeam */
  away?: Maybe<Club>;
  awayGoals?: Maybe<Scalars['Int']>;
  awayTeam?: Maybe<Team>;
  competition: Competition;
  date: Scalars['ISO8601DateTime'];
  extraTimeScoreAway?: Maybe<Scalars['Int']>;
  extraTimeScoreHome?: Maybe<Scalars['Int']>;
  /** @deprecated Replaced by homeTeam */
  home?: Maybe<Club>;
  homeGoals: Scalars['Int'];
  homeTeam?: Maybe<Team>;
  id: Scalars['ID'];
  lowCoverage: Scalars['Boolean'];
  minute: Scalars['Int'];
  penaltyScoreAway?: Maybe<Scalars['Int']>;
  penaltyScoreHome?: Maybe<Scalars['Int']>;
  periodType: Period;
  scored: Scalars['Boolean'];
  so5Fixture?: Maybe<So5Fixture>;
  /** Available statuses: scheduled | playing | played | cancelled | postponed | suspended. */
  status: Scalars['String'];
};

/** The connection type for Game. */
export type GameConnection = {
  __typename?: 'GameConnection';
  /** A list of edges. */
  edges: Array<GameEdge>;
  /** A list of nodes. */
  nodes: Array<Game>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type GameEdge = {
  __typename?: 'GameEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<Game>;
};

/** A highlighted deck */
export type HighlightedDeck = DeckInterface & Node & {
  __typename?: 'HighlightedDeck';
  /** The `cards` field cannot be nested within a list. */
  cards: CardConnection;
  cardsCount: Scalars['Int'];
  deckCards: DeckCardConnection;
  deckCardsCount: Scalars['Int'];
  firstCard?: Maybe<Card>;
  id: Scalars['ID'];
  slug: Scalars['String'];
  user?: Maybe<User>;
};


/** A highlighted deck */
export type HighlightedDeckCardsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** A highlighted deck */
export type HighlightedDeckDeckCardsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** A player injury */
export type Injury = Node & {
  __typename?: 'Injury';
  active: Scalars['Boolean'];
  expectedEndDate?: Maybe<Scalars['ISO8601DateTime']>;
  id: Scalars['ID'];
  kind: Scalars['String'];
  startDate: Scalars['ISO8601DateTime'];
};

/** Represents a jwt token */
export type JwtToken = {
  __typename?: 'JwtToken';
  /** JWT token expiration time. */
  expiredAt: Scalars['ISO8601DateTime'];
  /** JWT token, usable through a `Authorization: Bearer <token>` HTTP header. */
  token: Scalars['String'];
};

/** A club on the landing page */
export type LandingClub = {
  __typename?: 'LandingClub';
  league: Scalars['String'];
  logo: Scalars['String'];
  name: Scalars['String'];
};

/** A landing theme */
export type LandingTheme = Node & {
  __typename?: 'LandingTheme';
  cards: Array<Scalars['String']>;
  id: Scalars['ID'];
  slug: Scalars['String'];
  subtitle?: Maybe<Scalars['String']>;
  userSource?: Maybe<UserSource>;
};

/** A So5 Leaderboard rewards config */
export type LeaderboardRewardsConfig = {
  __typename?: 'LeaderboardRewardsConfig';
  conditional?: Maybe<Array<So5RewardConfig>>;
  prizePoolCurrency?: Maybe<PaymentCurrency>;
  ranking?: Maybe<Array<So5RewardConfig>>;
};

export enum License {
  ClubOnly = 'CLUB_ONLY',
  NotLicensed = 'NOT_LICENSED',
  PlayersAndClub = 'PLAYERS_AND_CLUB',
  PlayersOnly = 'PLAYERS_ONLY'
}

/** The limit order representation of one side of a Deal (Auction or Offer) */
export type LimitOrder = {
  __typename?: 'LimitOrder';
  amountBuy: Scalars['String'];
  amountSell: Scalars['String'];
  expirationTimestamp: Scalars['Int'];
  /** @deprecated Will be removed soon */
  id?: Maybe<Scalars['String']>;
  nonce: Scalars['Int'];
  tokenBuy: Scalars['String'];
  tokenSell: Scalars['String'];
  vaultIdBuy: Scalars['Int'];
  vaultIdSell: Scalars['Int'];
};

/** A Loom Account */
export type LoomAccount = Node & {
  __typename?: 'LoomAccount';
  address: Scalars['String'];
  id: Scalars['ID'];
};

/** An object representing a club for which a player has played during a certain time. */
export type Membership = Node & {
  __typename?: 'Membership';
  aggregatedStats: Stats;
  club?: Maybe<Club>;
  endDate?: Maybe<Scalars['ISO8601DateTime']>;
  id: Scalars['ID'];
  membershipTeam: Team;
  player: Player;
  startDate: Scalars['ISO8601DateTime'];
  stats: Array<Stats>;
  /** @deprecated Replaced by membershipTeam */
  team?: Maybe<Club>;
};

/** The connection type for Membership. */
export type MembershipConnection = {
  __typename?: 'MembershipConnection';
  /** A list of edges. */
  edges: Array<MembershipEdge>;
  /** A list of nodes. */
  nodes: Array<Membership>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type MembershipEdge = {
  __typename?: 'MembershipEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<Membership>;
};

/** An intent to mint cards for other users */
export type MintCardsForUsersInput = {
  /** The slug of the player that should be on the Card. Either that or the tier of the player must be given. */
  playerSlug?: InputMaybe<Scalars['String']>;
  /** The rarity of the Card. */
  rarity: Rarity;
  /** The tier of the player that should be on the Card. Either that or the slug of the player must be given. */
  tier?: InputMaybe<CardQuality>;
  /** The slug of the user that will receive the Card. */
  userSlug: Scalars['String'];
};

/** Represents a quota of Cards that can be minted on demand by a User */
export type MintingQuota = Node & {
  __typename?: 'MintingQuota';
  allocated: MintingQuotaAllocationConnection;
  endDate: Scalars['ISO8601DateTime'];
  id: Scalars['ID'];
  playerPool?: Maybe<PlayerPool>;
  startDate: Scalars['ISO8601DateTime'];
  units: Array<MintingQuotaUnit>;
  user: User;
};


/** Represents a quota of Cards that can be minted on demand by a User */
export type MintingQuotaAllocatedArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** Represents a quota of Cards of a certain tiers and rarity that can be minted on demand by a User */
export type MintingQuotaAllocation = Node & {
  __typename?: 'MintingQuotaAllocation';
  card: Card;
  id: Scalars['ID'];
  tier: Scalars['Int'];
  user: User;
};

/** The connection type for MintingQuotaAllocation. */
export type MintingQuotaAllocationConnection = {
  __typename?: 'MintingQuotaAllocationConnection';
  /** A list of edges. */
  edges: Array<MintingQuotaAllocationEdge>;
  /** A list of nodes. */
  nodes: Array<MintingQuotaAllocation>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type MintingQuotaAllocationEdge = {
  __typename?: 'MintingQuotaAllocationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<MintingQuotaAllocation>;
};

/** Represents a quota of Cards of a certain tier and rarity that can be minted on demand by a User */
export type MintingQuotaUnit = Node & {
  __typename?: 'MintingQuotaUnit';
  allocations: MintingQuotaAllocationConnection;
  id: Scalars['ID'];
  mintingQuota: MintingQuota;
  quantity: Scalars['Int'];
  rarity: Rarity;
  remaining: Scalars['Int'];
  tier?: Maybe<CardQuality>;
};


/** Represents a quota of Cards of a certain tier and rarity that can be minted on demand by a User */
export type MintingQuotaUnitAllocationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Accept an offer */
  acceptOffer?: Maybe<AcceptOfferPayload>;
  /** Accept terms of service */
  acceptTerms?: Maybe<AcceptTermsPayload>;
  /** Allows a user to add cards to a Deck. */
  addCardsToDeck?: Maybe<AddCardsToDeckPayload>;
  /** Allows a user to subscribe to the waiting list */
  addEmailToList?: Maybe<AddEmailToListPayload>;
  /** Add favourite clubs during the onboarding process */
  addFavouriteClubs?: Maybe<AddFavouriteClubsPayload>;
  /** Approve Migrator contract */
  approveMigrator?: Maybe<ApproveMigratorPayload>;
  /** Bid on an auction */
  bid?: Maybe<BidPayload>;
  /** Block another user from sending offers */
  blockUserOffers?: Maybe<BlockUserOffersPayload>;
  /** Buy a skin for your club */
  buySkin?: Maybe<BuySkinPayload>;
  cancelEthBankWithdrawals?: Maybe<CancelEthBankWithdrawalsPayload>;
  cancelFastWithdrawal?: Maybe<CancelFastWithdrawalPayload>;
  /** Cancel an offer */
  cancelOffer?: Maybe<CancelOfferPayload>;
  cancelWithdrawal?: Maybe<CancelWithdrawalPayload>;
  /** Check phone number verification code */
  checkPhoneNumberVerificationCode?: Maybe<CheckPhoneNumberVerificationCodePayload>;
  /** Claim an award */
  claimAward?: Maybe<ClaimAwardPayload>;
  /** Allows a user to claim a card drop */
  claimCardDrop?: Maybe<ClaimCardDropPayload>;
  /** Claim a referral reward */
  claimReferralReward?: Maybe<ClaimReferralRewardPayload>;
  /** Claim a reward */
  claimReward?: Maybe<ClaimRewardPayload>;
  /** Allows a user to mark an onboarding task as complete */
  completeOnboardingTask?: Maybe<CompleteOnboardingTaskPayload>;
  /** Confirm Email address */
  confirmEmail?: Maybe<ConfirmEmailPayload>;
  /** Confirms user Lineups */
  confirmSo5Lineups?: Maybe<ConfirmSo5LineupsPayload>;
  /** Withdraw a card to Ethereum */
  createCardWithdrawal?: Maybe<CreateCardWithdrawalPayload>;
  /** Allows a user to create a custom deck. */
  createCustomDeck?: Maybe<CreateCustomDeckPayload>;
  /** Send a Direct Offer to another manager */
  createDirectOffer?: Maybe<CreateDirectOfferPayload>;
  createEthBankWithdrawalIntent?: Maybe<CreateEthBankWithdrawalIntentPayload>;
  /** Creates an ETH migration */
  createEthMigration?: Maybe<CreateEthMigrationPayload>;
  /** Creates an eth vault */
  createEthVault?: Maybe<CreateEthVaultPayload>;
  createFastWithdrawal?: Maybe<CreateFastWithdrawalPayload>;
  /** Fix a minimum price for a card */
  createOrUpdateSingleBuyOfferMinPrice?: Maybe<CreateOrUpdateSingleBuyOfferMinPricePayload>;
  /** Create or update a user Lineup */
  createOrUpdateSo5Lineup?: Maybe<CreateOrUpdateSo5LineupPayload>;
  /** Create a payment intent */
  createPaymentIntent?: Maybe<CreatePaymentIntentPayload>;
  /** Offer to buy a single card for a fixed price */
  createSingleBuyOffer?: Maybe<CreateSingleBuyOfferPayload>;
  /** Sell a single card for a fixed price */
  createSingleSaleOffer?: Maybe<CreateSingleSaleOfferPayload>;
  /** Subscribe to new auctions on a Card, a Player, a Club or a Country */
  createSubscription?: Maybe<CreateSubscriptionPayload>;
  createWithdrawal?: Maybe<CreateWithdrawalPayload>;
  /** Allows a user to delete a custom deck. */
  deleteCustomDeck?: Maybe<DeleteCustomDeckPayload>;
  /** Deletes a user Lineup */
  deleteSo5Lineup?: Maybe<DeleteSo5LineupPayload>;
  /** Delete a subscription to new auctions on a Card, a Player, a Club or a Country */
  deleteSubscription?: Maybe<DeleteSubscriptionPayload>;
  /** Deletes user Lineups by leagues */
  deleteUserSo5Lineups?: Maybe<DeleteUserSo5LineupsPayload>;
  /** Destroy my Sorare account */
  destroyAccount?: Maybe<DestroyAccountPayload>;
  /** Destroy an expired referral */
  destroyReferral?: Maybe<DestroyReferralPayload>;
  detachPaymentMethod?: Maybe<DetachPaymentMethodPayload>;
  /** Disable 2FA requirement for login */
  disable2Fa?: Maybe<Disable2faPayload>;
  /** Disconnect from a social auth */
  disconnectOmniauthProvider?: Maybe<DisconnectOmniauthProviderPayload>;
  /** Allows a user to edit a card position in a Deck. */
  editCardInDeck?: Maybe<EditCardInDeckPayload>;
  /** Allows a user to edit a custom deck. */
  editCustomDeck?: Maybe<EditCustomDeckPayload>;
  /** Enable 2FA requirement for login */
  enable2Fa?: Maybe<Enable2faPayload>;
  /** Generate the pickable players of an action reward */
  generateActionRewardPickablePlayers?: Maybe<GenerateActionRewardPickablePlayersPayload>;
  /** Generate OTP backup codes */
  generateOtpBackupCodes?: Maybe<GenerateOtpBackupCodesPayload>;
  /** Mark notifications as read */
  markNotificationsAsRead?: Maybe<MarkNotificationsAsReadPayload>;
  /** Mint Cards for other users */
  mintCardsForUsers?: Maybe<MintCardsForUsersPayload>;
  /** Pick the players of an action reward */
  pickActionRewardPlayers?: Maybe<PickActionRewardPlayersPayload>;
  /** Get the limit orders that need to be signed in order to accept an offer */
  prepareAcceptOffer?: Maybe<PrepareAcceptOfferPayload>;
  /** Get the limit orders that need to be signed in order to bid on an english auction */
  prepareBid?: Maybe<PrepareBidPayload>;
  /** Get transfer request that needs to be signed in order to withdraw a card */
  prepareCardWithdrawal?: Maybe<PrepareCardWithdrawalPayload>;
  /** Get the payload to make an ETH deposit */
  prepareEthDeposit?: Maybe<PrepareEthDepositPayload>;
  /** Get the limit orders that need to be signed in order to be able to create an offer */
  prepareOffer?: Maybe<PrepareOfferPayload>;
  /** Get the payload to deposit an NFT into Layer 2 */
  prepareTokenDeposit?: Maybe<PrepareTokenDepositPayload>;
  /** Reject an Offer */
  rejectOffer?: Maybe<RejectOfferPayload>;
  relayCall?: Maybe<RelayCallPayload>;
  /** Allows a user to remove a card from a deck. */
  removeCardFromDeck?: Maybe<RemoveCardFromDeckPayload>;
  /** Request a receipt from Stripe */
  requestPaymentReceipt?: Maybe<RequestReceiptPayload>;
  resetPrivateKey?: Maybe<ResetPrivateKeyPayload>;
  /** Allows a user to restart a skipped onboarding process */
  resumeOnboarding?: Maybe<ResumeOnboardingPayload>;
  /** Add or update the given device token for push notifications */
  setDeviceToken?: Maybe<SetDeviceTokenPayload>;
  /** Sign in */
  signIn?: Maybe<SignInPayload>;
  /** Sign up */
  signUp?: Maybe<SignUpPayload>;
  /** Allows a user to skip his onboarding process */
  skipOnboarding?: Maybe<SkipOnboardingPayload>;
  /** Unblock email */
  unblockEmail?: Maybe<UnblockEmailPayload>;
  /** Unblock another user from sending offers */
  unblockUserOffers?: Maybe<UnblockUserOffersPayload>;
  /** Update a subscription notification preferences */
  updateSubscription?: Maybe<UpdateSubscriptionPayload>;
  /** Update user profile */
  updateUserProfile?: Maybe<UpdateUserProfilePayload>;
  /** Update user settings */
  updateUserSettings?: Maybe<UpdateUserSettingsPayload>;
  /** Verify phone number */
  verifyPhoneNumber?: Maybe<VerifyPhoneNumberPayload>;
};


export type MutationAcceptOfferArgs = {
  input: AcceptOfferInput;
};


export type MutationAcceptTermsArgs = {
  input: AcceptTermsInput;
};


export type MutationAddCardsToDeckArgs = {
  input: AddCardsToDeckInput;
};


export type MutationAddEmailToListArgs = {
  input: AddEmailToListInput;
};


export type MutationAddFavouriteClubsArgs = {
  input: AddFavouriteClubsInput;
};


export type MutationApproveMigratorArgs = {
  input: ApproveMigratorInput;
};


export type MutationBidArgs = {
  input: BidInput;
};


export type MutationBlockUserOffersArgs = {
  input: BlockUserOffersInput;
};


export type MutationBuySkinArgs = {
  input: BuySkinInput;
};


export type MutationCancelEthBankWithdrawalsArgs = {
  input: CancelEthBankWithdrawalsInput;
};


export type MutationCancelFastWithdrawalArgs = {
  input: CancelFastWithdrawalInput;
};


export type MutationCancelOfferArgs = {
  input: CancelOfferInput;
};


export type MutationCancelWithdrawalArgs = {
  input: CancelWithdrawalInput;
};


export type MutationCheckPhoneNumberVerificationCodeArgs = {
  input: CheckPhoneNumberVerificationCodeInput;
};


export type MutationClaimAwardArgs = {
  input: ClaimAwardInput;
};


export type MutationClaimCardDropArgs = {
  input: ClaimCardDropInput;
};


export type MutationClaimReferralRewardArgs = {
  input: ClaimReferralRewardInput;
};


export type MutationClaimRewardArgs = {
  input: ClaimRewardInput;
};


export type MutationCompleteOnboardingTaskArgs = {
  input: CompleteOnboardingTaskInput;
};


export type MutationConfirmEmailArgs = {
  input: ConfirmEmailInput;
};


export type MutationConfirmSo5LineupsArgs = {
  input: ConfirmSo5LineupsInput;
};


export type MutationCreateCardWithdrawalArgs = {
  input: CreateCardWithdrawalInput;
};


export type MutationCreateCustomDeckArgs = {
  input: CreateCustomDeckInput;
};


export type MutationCreateDirectOfferArgs = {
  input: CreateDirectOfferInput;
};


export type MutationCreateEthBankWithdrawalIntentArgs = {
  input: CreateEthBankWithdrawalIntentInput;
};


export type MutationCreateEthMigrationArgs = {
  input: CreateEthMigrationInput;
};


export type MutationCreateEthVaultArgs = {
  input: CreateEthVaultInput;
};


export type MutationCreateFastWithdrawalArgs = {
  input: CreateFastWithdrawalInput;
};


export type MutationCreateOrUpdateSingleBuyOfferMinPriceArgs = {
  input: CreateOrUpdateSingleBuyOfferMinPriceInput;
};


export type MutationCreateOrUpdateSo5LineupArgs = {
  input: CreateOrUpdateSo5LineupInput;
};


export type MutationCreatePaymentIntentArgs = {
  input: CreatePaymentIntentInput;
};


export type MutationCreateSingleBuyOfferArgs = {
  input: CreateSingleBuyOfferInput;
};


export type MutationCreateSingleSaleOfferArgs = {
  input: CreateSingleSaleOfferInput;
};


export type MutationCreateSubscriptionArgs = {
  input: CreateSubscriptionInput;
};


export type MutationCreateWithdrawalArgs = {
  input: CreateWithdrawalInput;
};


export type MutationDeleteCustomDeckArgs = {
  input: DeleteCustomDeckInput;
};


export type MutationDeleteSo5LineupArgs = {
  input: DeleteSo5LineupInput;
};


export type MutationDeleteSubscriptionArgs = {
  input: DeleteSubscriptionInput;
};


export type MutationDeleteUserSo5LineupsArgs = {
  input: DeleteUserSo5LineupsInput;
};


export type MutationDestroyAccountArgs = {
  input: DestroyAccountInput;
};


export type MutationDestroyReferralArgs = {
  input: DestroyReferralInput;
};


export type MutationDetachPaymentMethodArgs = {
  input: DetachPaymentMethodInput;
};


export type MutationDisable2FaArgs = {
  input: Disable2faInput;
};


export type MutationDisconnectOmniauthProviderArgs = {
  input: DisconnectOmniauthProviderInput;
};


export type MutationEditCardInDeckArgs = {
  input: EditCardInDeckInput;
};


export type MutationEditCustomDeckArgs = {
  input: EditCustomDeckInput;
};


export type MutationEnable2FaArgs = {
  input: Enable2faInput;
};


export type MutationGenerateActionRewardPickablePlayersArgs = {
  input: GenerateActionRewardPickablePlayersInput;
};


export type MutationGenerateOtpBackupCodesArgs = {
  input: GenerateOtpBackupCodesInput;
};


export type MutationMarkNotificationsAsReadArgs = {
  input: MarkNotificationsAsReadInput;
};


export type MutationMintCardsForUsersArgs = {
  input: MintCardsForUsersInput;
};


export type MutationPickActionRewardPlayersArgs = {
  input: PickActionRewardPlayersInput;
};


export type MutationPrepareAcceptOfferArgs = {
  input: PrepareAcceptOfferInput;
};


export type MutationPrepareBidArgs = {
  input: PrepareBidInput;
};


export type MutationPrepareCardWithdrawalArgs = {
  input: PrepareCardWithdrawalInput;
};


export type MutationPrepareEthDepositArgs = {
  input: PrepareEthDepositInput;
};


export type MutationPrepareOfferArgs = {
  input: PrepareOfferInput;
};


export type MutationPrepareTokenDepositArgs = {
  input: PrepareTokenDepositInput;
};


export type MutationRejectOfferArgs = {
  input: RejectOfferInput;
};


export type MutationRelayCallArgs = {
  input: RelayCallInput;
};


export type MutationRemoveCardFromDeckArgs = {
  input: RemoveCardFromDeckInput;
};


export type MutationRequestPaymentReceiptArgs = {
  input: RequestReceiptInput;
};


export type MutationResetPrivateKeyArgs = {
  input: ResetPrivateKeyInput;
};


export type MutationResumeOnboardingArgs = {
  input: ResumeOnboardingInput;
};


export type MutationSetDeviceTokenArgs = {
  input: SetDeviceTokenInput;
};


export type MutationSignInArgs = {
  input: SignInInput;
};


export type MutationSignUpArgs = {
  input: SignUpInput;
};


export type MutationSkipOnboardingArgs = {
  input: SkipOnboardingInput;
};


export type MutationUnblockEmailArgs = {
  input: UnblockEmailInput;
};


export type MutationUnblockUserOffersArgs = {
  input: UnblockUserOffersInput;
};


export type MutationUpdateSubscriptionArgs = {
  input: UpdateSubscriptionInput;
};


export type MutationUpdateUserProfileArgs = {
  input: UpdateUserProfileInput;
};


export type MutationUpdateUserSettingsArgs = {
  input: UpdateUserSettingsInput;
};


export type MutationVerifyPhoneNumberArgs = {
  input: VerifyPhoneNumberInput;
};

export type NationalTeam = Node & TeamInterface & WithPictureInterface & WithSubscriptionsInterface & {
  __typename?: 'NationalTeam';
  activeCompetitions: Array<Competition>;
  /** The `active_memberships` field cannot be nested within a list. */
  activeMemberships: MembershipConnection;
  /** The `active_players` field cannot be nested within a list. */
  activePlayers: PlayerConnection;
  /** The `cards` field cannot be nested within a list. */
  cards: CardConnection;
  code?: Maybe<Scalars['String']>;
  /** @deprecated replaced by colorRight on customBanner */
  colorBottom?: Maybe<Scalars['String']>;
  /** @deprecated replaced by colorLeft on customBanner */
  colorTop?: Maybe<Scalars['String']>;
  country: Country;
  currentUserSubscription?: Maybe<EmailSubscription>;
  customBanner?: Maybe<CustomBanner>;
  founded?: Maybe<Scalars['String']>;
  /** The `games` field cannot be nested within a list. */
  games: GameConnection;
  id: Scalars['ID'];
  internationalCompetition?: Maybe<Competition>;
  lastFiveGames: Array<Game>;
  /** The `latest_games` field cannot be nested within a list. */
  latestGames: GameConnection;
  /** @deprecated only exposed on cards */
  license: License;
  name: Scalars['String'];
  optaId?: Maybe<Scalars['String']>;
  pictureSecondaryUrl?: Maybe<Scalars['String']>;
  pictureUrl?: Maybe<Scalars['String']>;
  /** @deprecated Replaced teamPictureUrl on CardType */
  pictureUrlByRarity: Scalars['Json'];
  /** The `players` field cannot be nested within a list. */
  players: PlayerConnection;
  ready: Scalars['Boolean'];
  /** The `recent_departures` field cannot be nested within a list. */
  recentDepartures: PlayerConnection;
  slug: Scalars['String'];
  subscriptionsCount: Scalars['Int'];
  upcomingGames: Array<Maybe<Game>>;
};


export type NationalTeamActiveMembershipsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type NationalTeamActivePlayersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type NationalTeamCardsArgs = {
  after?: InputMaybe<Scalars['String']>;
  age?: InputMaybe<Scalars['Int']>;
  assetIds?: InputMaybe<Array<Scalars['String']>>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  owned?: InputMaybe<Scalars['Boolean']>;
  positions?: InputMaybe<Array<Position>>;
  rarities?: InputMaybe<Array<Rarity>>;
  serialNumber?: InputMaybe<Scalars['Int']>;
  shirtNumber?: InputMaybe<Scalars['Int']>;
  slugs?: InputMaybe<Array<Scalars['String']>>;
};


export type NationalTeamGamesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  endDate: Scalars['ISO8601DateTime'];
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  startDate: Scalars['ISO8601DateTime'];
};


export type NationalTeamLatestGamesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type NationalTeamPictureUrlArgs = {
  derivative?: InputMaybe<Scalars['String']>;
};


export type NationalTeamPictureUrlByRarityArgs = {
  derivative?: InputMaybe<Scalars['String']>;
};


export type NationalTeamPlayersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type NationalTeamRecentDeparturesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type NationalTeamUpcomingGamesArgs = {
  first: Scalars['Int'];
};

/** An object with an ID. */
export type Node = {
  /** ID of the object. */
  id: Scalars['ID'];
};

/** User notification */
export type Notification = AnnouncementNotification | AuctionNotification | CardNotification | DecisiveActionNotification | DivisionChangeNotification | OfferNotification | ReferralRewardNotification | SaleNotification | So5LineupNotification | UserAwardNotification;

/** A notification filter */
export type NotificationCategoryInput = {
  name: Scalars['String'];
  type: Scalars['String'];
};

/** The connection type for Notification. */
export type NotificationConnection = {
  __typename?: 'NotificationConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<NotificationEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Notification>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type NotificationEdge = {
  __typename?: 'NotificationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<Notification>;
};

/** User Notification */
export type NotificationInterface = {
  createdAt: Scalars['ISO8601DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  read: Scalars['Boolean'];
  user: CurrentUser;
};

/** A Sorare user notification preference */
export type NotificationPreference = Node & {
  __typename?: 'NotificationPreference';
  defaultValue: Scalars['Json'];
  id: Scalars['ID'];
  name: Scalars['String'];
  value?: Maybe<Scalars['Json']>;
  values: Array<Scalars['Json']>;
};

/** A notification preference */
export type NotificationPreferenceInput = {
  name: Scalars['String'];
  value: Scalars['Json'];
};

/** The entrypoint for notifications information */
export type Notifications = Node & {
  __typename?: 'Notifications';
  id: Scalars['ID'];
  notifications: NotificationConnection;
  unreadCount: Scalars['Int'];
};


/** The entrypoint for notifications information */
export type NotificationsNotificationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** An OAuth application */
export type OAuthApplication = WithPictureInterface & {
  __typename?: 'OAuthApplication';
  name: Scalars['String'];
  pictureUrl?: Maybe<Scalars['String']>;
  scopes?: Maybe<Scalars['String']>;
};


/** An OAuth application */
export type OAuthApplicationPictureUrlArgs = {
  derivative?: InputMaybe<Scalars['String']>;
};

/** An Offer */
export type Offer = Node & OfferInterface & {
  __typename?: 'Offer';
  aasmState: Scalars['String'];
  acceptedAt?: Maybe<Scalars['ISO8601DateTime']>;
  blockchainId?: Maybe<Scalars['String']>;
  cancelledAt?: Maybe<Scalars['ISO8601DateTime']>;
  createdAt: Scalars['ISO8601DateTime'];
  creditCardFee: Scalars['Float'];
  endDate: Scalars['ISO8601DateTime'];
  id: Scalars['ID'];
  /** @deprecated use receiveCards instead */
  receiveCardOffers: Array<CardOffer>;
  receiveCards: Array<Card>;
  receiveWeiAmount?: Maybe<Scalars['String']>;
  /** Receive Amount in fiat currencies. Not broadcastable for performance reasons. */
  receiveWeiAmountInFiat?: Maybe<Fiat>;
  receiver?: Maybe<Ownerable>;
  /** @deprecated use sendCards instead */
  sendCardOffers: Array<CardOffer>;
  sendCards: Array<Card>;
  sendWeiAmount?: Maybe<Scalars['String']>;
  /** Send Amount in fiat currencies. Not broadcastable for performance reasons. */
  sendWeiAmountInFiat?: Maybe<Fiat>;
  sender: Ownerable;
  startDate: Scalars['ISO8601DateTime'];
};

/** The connection type for Offer. */
export type OfferConnection = {
  __typename?: 'OfferConnection';
  /** A list of edges. */
  edges: Array<OfferEdge>;
  /** A list of nodes. */
  nodes: Array<Offer>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export enum OfferDirection {
  Received = 'RECEIVED',
  Sent = 'SENT'
}

/** An edge in a connection. */
export type OfferEdge = {
  __typename?: 'OfferEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<Offer>;
};

/** An Offer */
export type OfferInterface = {
  aasmState: Scalars['String'];
  acceptedAt?: Maybe<Scalars['ISO8601DateTime']>;
  blockchainId?: Maybe<Scalars['String']>;
  cancelledAt?: Maybe<Scalars['ISO8601DateTime']>;
  createdAt: Scalars['ISO8601DateTime'];
  creditCardFee: Scalars['Float'];
  endDate: Scalars['ISO8601DateTime'];
  id: Scalars['ID'];
  sender: Ownerable;
  startDate: Scalars['ISO8601DateTime'];
};

/** An object including all arguments to migrate an offer */
export type OfferMigrationInput = {
  expirationBlock: Scalars['Int'];
  migrateInternalCardsSignature?: InputMaybe<Scalars['String']>;
  migrateMappedCardsSignature?: InputMaybe<Scalars['String']>;
};

/** A user notification regarding an Offer */
export type OfferNotification = Node & NotificationInterface & {
  __typename?: 'OfferNotification';
  createdAt: Scalars['ISO8601DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  offer: Offer;
  read: Scalars['Boolean'];
  user: CurrentUser;
};

export enum OfferType {
  DirectOffer = 'DIRECT_OFFER',
  SingleBuyOffer = 'SINGLE_BUY_OFFER',
  SingleSaleOffer = 'SINGLE_SALE_OFFER'
}

/** An object representing the state of a user onboarding */
export type Onboarding = {
  __typename?: 'Onboarding';
  completed: Scalars['Boolean'];
  enabled: Scalars['Boolean'];
  id: Scalars['ID'];
  skipped: Scalars['Boolean'];
  tasks: Array<OnboardingTask>;
};

export enum OnboardingStepEnum {
  CardDetails = 'CARD_DETAILS',
  CardScarcities = 'CARD_SCARCITIES',
  ComposeTeam = 'COMPOSE_TEAM',
  Congratulation = 'CONGRATULATION',
  CreateYourClub = 'CREATE_YOUR_CLUB',
  EarningRewards = 'EARNING_REWARDS',
  FollowPlayers = 'FOLLOW_PLAYERS',
  GetStarted = 'GET_STARTED',
  MarketplaceWalkthrough = 'MARKETPLACE_WALKTHROUGH',
  SelectFavoriteClub = 'SELECT_FAVORITE_CLUB',
  WelcomeToMarketplace = 'WELCOME_TO_MARKETPLACE',
  WhatAreLeagues = 'WHAT_ARE_LEAGUES',
  WinningALeague = 'WINNING_A_LEAGUE'
}

/** An object representing the state of a task in the user onboarding */
export type OnboardingTask = {
  __typename?: 'OnboardingTask';
  /** @deprecated Replaced by drop */
  cardDrop?: Maybe<Array<Card>>;
  drop?: Maybe<Array<CardDrop>>;
  forced: Scalars['Boolean'];
  id: Scalars['ID'];
  name: OnboardingTaskEnum;
  state: OnboardingTaskState;
  steps: Array<OnboardingStepEnum>;
};

export enum OnboardingTaskEnum {
  AddFavouriteClubs = 'ADD_FAVOURITE_CLUBS',
  AfterComplete = 'AFTER_COMPLETE',
  ComposeTeam = 'COMPOSE_TEAM',
  Congratulation = 'CONGRATULATION',
  FollowPlayer = 'FOLLOW_PLAYER',
  JoinRookie = 'JOIN_ROOKIE',
  PlaceFirstBid = 'PLACE_FIRST_BID'
}

export enum OnboardingTaskState {
  Done = 'DONE',
  Todo = 'TODO',
  ToClaim = 'TO_CLAIM'
}

/** A list of best So5Score by position */
export type OrderedSo5Scores = {
  __typename?: 'OrderedSo5Scores';
  position: Scalars['String'];
  so5Scores: Array<So5Score>;
};

/** An object representing the past or present ownership of a card by a user or a contract */
export type Owner = Node & OwnerInterface & {
  __typename?: 'Owner';
  account?: Maybe<Account>;
  address: Scalars['String'];
  blockchain: Scalars['String'];
  card: Card;
  /**
   * The deal id that created this owner in case it comes from an offer
   * @deprecated no longer maintained
   */
  dealId?: Maybe<Scalars['String']>;
  from: Scalars['ISO8601DateTime'];
  id: Scalars['ID'];
  /** @deprecated use account.accountable.migratorApproved */
  migratorApproval: Scalars['Boolean'];
  /** @deprecated use id */
  newId?: Maybe<Scalars['String']>;
  optimistic: Scalars['Boolean'];
  /** @deprecated use account.owner instead */
  ownerable?: Maybe<Ownerable>;
  /** Card price, in wei. */
  price: Scalars['String'];
  referenceId?: Maybe<Scalars['String']>;
  transferType: Scalars['String'];
  /** @deprecated no longer maintained */
  userNonce?: Maybe<Scalars['Int']>;
};

/** Card owner (contract or user) */
export type OwnerInterface = {
  account?: Maybe<Account>;
  address: Scalars['String'];
  blockchain: Scalars['String'];
  card: Card;
  /**
   * The deal id that created this owner in case it comes from an offer
   * @deprecated no longer maintained
   */
  dealId?: Maybe<Scalars['String']>;
  from: Scalars['ISO8601DateTime'];
  id: Scalars['ID'];
  /** @deprecated use account.accountable.migratorApproved */
  migratorApproval: Scalars['Boolean'];
  /** @deprecated use id */
  newId?: Maybe<Scalars['String']>;
  optimistic: Scalars['Boolean'];
  /** Card price, in wei. */
  price: Scalars['String'];
  referenceId?: Maybe<Scalars['String']>;
  transferType: Scalars['String'];
  /** @deprecated no longer maintained */
  userNonce?: Maybe<Scalars['Int']>;
};

export enum OwnerTransfer {
  DirectOffer = 'DIRECT_OFFER',
  EnglishAuction = 'ENGLISH_AUCTION',
  Mint = 'MINT',
  Pack = 'PACK',
  Referral = 'REFERRAL',
  Reward = 'REWARD',
  SingleBuyOffer = 'SINGLE_BUY_OFFER',
  SingleSaleOffer = 'SINGLE_SALE_OFFER',
  Transfer = 'TRANSFER'
}

/** An owner with conversion rates */
export type OwnerWithRates = Node & OwnerInterface & {
  __typename?: 'OwnerWithRates';
  account?: Maybe<Account>;
  address: Scalars['String'];
  blockchain: Scalars['String'];
  card: Card;
  /**
   * The deal id that created this owner in case it comes from an offer
   * @deprecated no longer maintained
   */
  dealId?: Maybe<Scalars['String']>;
  from: Scalars['ISO8601DateTime'];
  id: Scalars['ID'];
  /** @deprecated use account.accountable.migratorApproved */
  migratorApproval: Scalars['Boolean'];
  /** @deprecated use id */
  newId?: Maybe<Scalars['String']>;
  optimistic: Scalars['Boolean'];
  /** @deprecated use account.owner instead */
  ownerable?: Maybe<Ownerable>;
  /** Card price, in wei. */
  price: Scalars['String'];
  priceInFiat: Fiat;
  referenceId?: Maybe<Scalars['String']>;
  transferType: Scalars['String'];
  /** @deprecated no longer maintained */
  userNonce?: Maybe<Scalars['Int']>;
};

/** Object that can be an owner */
export type Ownerable = AnonymousUser | Contract | User;

/** A pack of cards */
export type Pack = Node & {
  __typename?: 'Pack';
  blockchainId: Scalars['String'];
  blockedByUser: Scalars['Boolean'];
  boughtByUser: Scalars['Boolean'];
  cards: Array<Card>;
  category: Scalars['String'];
  contract: Contract;
  cutOff: Scalars['ISO8601DateTime'];
  deadline: Scalars['ISO8601DateTime'];
  id: Scalars['ID'];
  priceInEuroCents: Scalars['String'];
  priceInWei: Scalars['String'];
  serial: Scalars['Int'];
  slug: Scalars['String'];
  sold: Scalars['Boolean'];
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** A payment intent */
export type Payment = Node & {
  __typename?: 'Payment';
  aasmState: PaymentIntentState;
  amount: Scalars['String'];
  /** @deprecated Use fiatAmount instead */
  amountInFiat: Fiat;
  creditCardReceiptAvailable: Scalars['Boolean'];
  creditCardReceiptSent: Scalars['Boolean'];
  fiat: Scalars['Boolean'];
  fiatAmount?: Maybe<Scalars['Int']>;
  fiatCurrency?: Maybe<FiatCurrency>;
  fiatReceiptUrl?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  operation?: Maybe<PaymentIntentOperation>;
  spentAt: Scalars['ISO8601DateTime'];
  tokenOperation?: Maybe<PaymentIntentTokenOperation>;
  user: User;
};

/** The connection type for Payment. */
export type PaymentConnection = {
  __typename?: 'PaymentConnection';
  /** A list of edges. */
  edges: Array<PaymentEdge>;
  /** A list of nodes. */
  nodes: Array<Payment>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export enum PaymentCurrency {
  Eth = 'ETH',
  Eur = 'EUR',
  Gbp = 'GBP',
  Usd = 'USD'
}

/** An edge in a connection. */
export type PaymentEdge = {
  __typename?: 'PaymentEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<Payment>;
};

/** A Stripe Payment Intent */
export type PaymentIntent = {
  __typename?: 'PaymentIntent';
  amount: Scalars['Int'];
  clientSecret: Scalars['String'];
  id: Scalars['String'];
  paymentMethod?: Maybe<Scalars['String']>;
};

/** Object that can be an operation of a PaymentIntent */
export type PaymentIntentOperation = Bid | Offer;

export enum PaymentIntentState {
  Cancelled = 'CANCELLED',
  Ready = 'READY',
  Spent = 'SPENT'
}

/** Object that can be a tokenOperation of a PaymentIntent */
export type PaymentIntentTokenOperation = TokenBid | TokenOffer;

/** Stripe Payment Method */
export type PaymentMethod = {
  __typename?: 'PaymentMethod';
  card: CreditCard;
  id: Scalars['String'];
};

export enum Period {
  EndOfExtraTimeBeforePenalties = 'END_OF_EXTRA_TIME_BEFORE_PENALTIES',
  EndOfSecondHalfBeforeExtraTime = 'END_OF_SECOND_HALF_BEFORE_EXTRA_TIME',
  ExtraTimeFirstHalf = 'EXTRA_TIME_FIRST_HALF',
  ExtraTimeHalfTime = 'EXTRA_TIME_HALF_TIME',
  ExtraTimeSecondHalf = 'EXTRA_TIME_SECOND_HALF',
  FirstHalf = 'FIRST_HALF',
  FullTime = 'FULL_TIME',
  HalfTime = 'HALF_TIME',
  PenaltyShootout = 'PENALTY_SHOOTOUT',
  PreMatch = 'PRE_MATCH',
  SecondHalf = 'SECOND_HALF'
}

/** A pickable player */
export type PickablePlayer = Node & {
  __typename?: 'PickablePlayer';
  id: Scalars['ID'];
  pictureUrl: Scalars['String'];
  player: Player;
};

/** A professional football player */
export type Player = Node & WithMemberships & WithPictureInterface & WithPublicCardsInterface & WithSubscriptionsInterface & {
  __typename?: 'Player';
  activeClub?: Maybe<Club>;
  activeClubMembership?: Maybe<Membership>;
  /** @deprecated injury data not reliable */
  activeInjuries: Array<Injury>;
  activeNationalTeam?: Maybe<NationalTeam>;
  age: Scalars['Int'];
  /** All player So5Scores ordered by descending game date */
  allSo5Scores: So5ScoreConnection;
  appearances: Scalars['Int'];
  beforeLastOwningMembership?: Maybe<Membership>;
  bestFoot: Scalars['String'];
  birthDate?: Maybe<Scalars['ISO8601DateTime']>;
  cardSupply: Array<CardSeasonSupply>;
  /** The `cards` field cannot be nested within a list. */
  cards: CardConnection;
  careerSeasons: Array<Season>;
  clubMemberships: Array<Membership>;
  country: Country;
  currentSeason?: Maybe<Season>;
  currentUserSubscription?: Maybe<EmailSubscription>;
  displayName: Scalars['String'];
  firstName: Scalars['String'];
  gameStats: Array<Maybe<PlayerGameStats>>;
  height?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  lastClub?: Maybe<Club>;
  lastName: Scalars['String'];
  matchName: Scalars['String'];
  memberships: Array<Membership>;
  optaId?: Maybe<Scalars['String']>;
  pictureUrl?: Maybe<Scalars['String']>;
  position: Scalars['String'];
  shirtNumber?: Maybe<Scalars['Int']>;
  slug: Scalars['String'];
  /** Up to 5 last So5Scores used in a So5Fixture */
  so5Scores: Array<Maybe<So5Score>>;
  stats?: Maybe<Stats>;
  status: PlayerStatus;
  subscriptionsCount: Scalars['Int'];
  /** @deprecated Replaced by pictureUrl(derivative: \"avatar\") */
  tmktImageUrl?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
  weight?: Maybe<Scalars['Int']>;
};


/** A professional football player */
export type PlayerAllSo5ScoresArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** A professional football player */
export type PlayerCardsArgs = {
  after?: InputMaybe<Scalars['String']>;
  age?: InputMaybe<Scalars['Int']>;
  assetIds?: InputMaybe<Array<Scalars['String']>>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  owned?: InputMaybe<Scalars['Boolean']>;
  positions?: InputMaybe<Array<Position>>;
  rarities?: InputMaybe<Array<Rarity>>;
  serialNumber?: InputMaybe<Scalars['Int']>;
  shirtNumber?: InputMaybe<Scalars['Int']>;
  slugs?: InputMaybe<Array<Scalars['String']>>;
};


/** A professional football player */
export type PlayerCareerSeasonsArgs = {
  type?: InputMaybe<CompetitionType>;
};


/** A professional football player */
export type PlayerGameStatsArgs = {
  last: Scalars['Int'];
  lowCoverage?: InputMaybe<Scalars['Boolean']>;
};


/** A professional football player */
export type PlayerPictureUrlArgs = {
  derivative?: InputMaybe<Scalars['String']>;
};


/** A professional football player */
export type PlayerSo5ScoresArgs = {
  last: Scalars['Int'];
  lowCoverage?: InputMaybe<Scalars['Boolean']>;
};


/** A professional football player */
export type PlayerStatsArgs = {
  seasonStartYear: Scalars['Int'];
};

/** The connection type for Player. */
export type PlayerConnection = {
  __typename?: 'PlayerConnection';
  /** A list of edges. */
  edges: Array<PlayerEdge>;
  /** A list of nodes. */
  nodes: Array<Player>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type PlayerEdge = {
  __typename?: 'PlayerEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<Player>;
};

/** Stats of a player for a game */
export type PlayerGameStats = Node & {
  __typename?: 'PlayerGameStats';
  accuratePass?: Maybe<Scalars['Int']>;
  cleanSheet?: Maybe<Scalars['Int']>;
  /** @deprecated Replaced by team */
  club: Club;
  crossAccuracy?: Maybe<Scalars['Int']>;
  formationPlace?: Maybe<Scalars['Int']>;
  fouls?: Maybe<Scalars['Int']>;
  game: Game;
  gameStarted?: Maybe<Scalars['Int']>;
  /** @deprecated Replaced by status on game field */
  gameStatus: Scalars['String'];
  goalAssist?: Maybe<Scalars['Int']>;
  goalKicks?: Maybe<Scalars['Int']>;
  goals?: Maybe<Scalars['Int']>;
  goalsConceded?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  live: Scalars['Boolean'];
  lostCorners?: Maybe<Scalars['Int']>;
  minsPlayed?: Maybe<Scalars['Int']>;
  onGameSheet: Scalars['Boolean'];
  ontargetScoringAtt?: Maybe<Scalars['Int']>;
  ownGoals?: Maybe<Scalars['Int']>;
  parries?: Maybe<Scalars['Int']>;
  passAccuracy?: Maybe<Scalars['Int']>;
  penaltiesSaved?: Maybe<Scalars['Int']>;
  penaltyKickMissed?: Maybe<Scalars['Int']>;
  penaltySave?: Maybe<Scalars['Int']>;
  player: Player;
  redCard?: Maybe<Scalars['Int']>;
  /** @deprecated Not relevant with scoring V4 */
  relevantStats: Scalars['Json'];
  reviewed: Scalars['Boolean'];
  saves?: Maybe<Scalars['Int']>;
  shotAccuracy?: Maybe<Scalars['Int']>;
  shotEfficiency?: Maybe<Scalars['Int']>;
  singleGoalGame?: Maybe<Scalars['Int']>;
  so5Score?: Maybe<So5Score>;
  team: Team;
  totalClearance?: Maybe<Scalars['Int']>;
  totalPass?: Maybe<Scalars['Int']>;
  totalScoringAtt?: Maybe<Scalars['Int']>;
  totalTackle?: Maybe<Scalars['Int']>;
  wasFouled?: Maybe<Scalars['Int']>;
  yellowCard?: Maybe<Scalars['Int']>;
};

/** Represents a list of players available for a minting quota */
export type PlayerPool = {
  __typename?: 'PlayerPool';
  common?: Maybe<TieredPlayerPool>;
  computedAt: Scalars['ISO8601DateTime'];
  limited?: Maybe<TieredPlayerPool>;
  rare?: Maybe<TieredPlayerPool>;
  superRare?: Maybe<TieredPlayerPool>;
  unique?: Maybe<TieredPlayerPool>;
};

/** Player status based on latest games he has played */
export type PlayerStatus = Node & {
  __typename?: 'PlayerStatus';
  id: Scalars['ID'];
  lastFifteenSo5Appearances?: Maybe<Scalars['Int']>;
  lastFifteenSo5AverageScore?: Maybe<Scalars['Float']>;
  lastFiveSo5Appearances?: Maybe<Scalars['Int']>;
  lastFiveSo5AverageScore?: Maybe<Scalars['Float']>;
  playingStatus?: Maybe<Scalars['String']>;
};

/** A professional football player with current season supply */
export type PlayerWithSupply = {
  __typename?: 'PlayerWithSupply';
  availableSupply?: Maybe<Scalars['Int']>;
  player: Player;
  slug: Scalars['String'];
};

export enum Position {
  Coach = 'Coach',
  Defender = 'Defender',
  Forward = 'Forward',
  Goalkeeper = 'Goalkeeper',
  Midfielder = 'Midfielder',
  Unknown = 'Unknown'
}

/** An object representing the breakdown of the power of a Card */
export type PowerBreakdown = {
  __typename?: 'PowerBreakdown';
  captain: Scalars['String'];
  fidelity: Scalars['String'];
  scarcity: Scalars['String'];
  season: Scalars['String'];
  version: Scalars['Int'];
  xp: Scalars['String'];
};

/** Public user information */
export type PublicUserInfoInterface = {
  allTimeBestDecksInFormation: Array<DeckInFormation>;
  awards: Array<UserAward>;
  baseballProfile?: Maybe<UserSportProfile>;
  /** The `bought_single_sale_offers` field cannot be nested within a list. */
  boughtSingleSaleOffers: SingleSaleOfferConnection;
  /** The `bought_single_sale_token_offers` field cannot be nested within a list. */
  boughtSingleSaleTokenOffers: TokenOfferConnection;
  /** The `buying_english_auctions` field cannot be nested within a list. */
  buyingEnglishAuctions: Array<EnglishAuction>;
  /** The `buying_token_auctions` field cannot be nested within a list. */
  buyingTokenAuctions: Array<TokenAuction>;
  cardCounts: CardCount;
  cardsCount: Scalars['Int'];
  createdAt: Scalars['ISO8601DateTime'];
  /** The `custom_decks` field cannot be nested within a list. */
  customDecks: CustomDeckConnection;
  /** The `ended_with_no_buyer_single_sale_offers` field cannot be nested within a list. */
  endedWithNoBuyerSingleSaleOffers: SingleSaleOfferConnection;
  /** The `ended_with_no_buyer_single_sale_token_offers` field cannot be nested within a list. */
  endedWithNoBuyerSingleSaleTokenOffers: TokenOfferConnection;
  /** The `english_auctions` field cannot be nested within a list. */
  englishAuctions: EnglishAuctionConnection;
  ethVaultId?: Maybe<Scalars['Int']>;
  ethereumAddress: Scalars['String'];
  followed?: Maybe<EmailSubscription>;
  /** The `followers` field cannot be nested within a list. */
  followers: UserWithSubscriptionSlugConnection;
  followersCount: Scalars['Int'];
  /** The `following` field cannot be nested within a list. */
  following: UserWithSubscriptionSlugConnection;
  followingCount: Scalars['Int'];
  footballProfile?: Maybe<UserSportProfile>;
  highlightedDeck?: Maybe<HighlightedDeck>;
  id: Scalars['ID'];
  /**
   * The `live_single_sale_offers` field cannot be nested within a list.
   * @deprecated Use the paginated version instead
   */
  liveSingleSaleOffers: Array<SingleSaleOffer>;
  /** The `live_single_sale_token_offers` field cannot be nested within a list. */
  liveSingleSaleTokenOffers: TokenOfferConnection;
  /** The `lost_english_auctions` field cannot be nested within a list. */
  lostEnglishAuctions: EnglishAuctionConnection;
  /** The `lost_token_auctions` field cannot be nested within a list. */
  lostTokenAuctions: TokenAuctionConnection;
  nickname: Scalars['String'];
  /** The `paginated_cards` field cannot be nested within a list. */
  paginatedCards: CardConnection;
  /** The `paginated_live_single_sale_offers` field cannot be nested within a list. */
  paginatedLiveSingleSaleOffers: SingleSaleOfferConnection;
  profile: UserProfile;
  /** The `single_sale_offers` field cannot be nested within a list. */
  singleSaleOffers: SingleSaleOfferConnection;
  /** The `single_sale_token_offers` field cannot be nested within a list. */
  singleSaleTokenOffers: TokenOfferConnection;
  slug: Scalars['String'];
  /** The `sold_single_sale_offers` field cannot be nested within a list. */
  soldSingleSaleOffers: SingleSaleOfferConnection;
  /** The `sold_single_sale_token_offers` field cannot be nested within a list. */
  soldSingleSaleTokenOffers: TokenOfferConnection;
  sorareAddress?: Maybe<Scalars['String']>;
  starkKey?: Maybe<Scalars['String']>;
  starkKeyRegistered: Scalars['Boolean'];
  /** The `token_auctions` field cannot be nested within a list. */
  tokenAuctions: TokenAuctionConnection;
  /** The `won_english_auctions` field cannot be nested within a list. */
  wonEnglishAuctions: EnglishAuctionConnection;
  /** The `won_token_auctions` field cannot be nested within a list. */
  wonTokenAuctions: TokenAuctionConnection;
};


/** Public user information */
export type PublicUserInfoInterfaceBoughtSingleSaleOffersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortByEndDate?: InputMaybe<SortingOption>;
};


/** Public user information */
export type PublicUserInfoInterfaceBoughtSingleSaleTokenOffersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortByEndDate?: InputMaybe<SortingOption>;
  sport?: InputMaybe<Array<Sport>>;
};


/** Public user information */
export type PublicUserInfoInterfaceBuyingEnglishAuctionsArgs = {
  newlyListed?: InputMaybe<Scalars['Boolean']>;
};


/** Public user information */
export type PublicUserInfoInterfaceBuyingTokenAuctionsArgs = {
  newlyListed?: InputMaybe<Scalars['Boolean']>;
  sport?: InputMaybe<Array<Sport>>;
};


/** Public user information */
export type PublicUserInfoInterfaceCustomDecksArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** Public user information */
export type PublicUserInfoInterfaceEndedWithNoBuyerSingleSaleOffersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortByEndDate?: InputMaybe<SortingOption>;
};


/** Public user information */
export type PublicUserInfoInterfaceEndedWithNoBuyerSingleSaleTokenOffersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortByEndDate?: InputMaybe<SortingOption>;
  sport?: InputMaybe<Array<Sport>>;
};


/** Public user information */
export type PublicUserInfoInterfaceEnglishAuctionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortByEndDate?: InputMaybe<SortingOption>;
};


/** Public user information */
export type PublicUserInfoInterfaceFollowersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** Public user information */
export type PublicUserInfoInterfaceFollowingArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** Public user information */
export type PublicUserInfoInterfaceLiveSingleSaleOffersArgs = {
  newlyListed?: InputMaybe<Scalars['Boolean']>;
};


/** Public user information */
export type PublicUserInfoInterfaceLiveSingleSaleTokenOffersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortByEndDate?: InputMaybe<SortingOption>;
  sport?: InputMaybe<Array<Sport>>;
};


/** Public user information */
export type PublicUserInfoInterfaceLostEnglishAuctionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortByEndDate?: InputMaybe<SortingOption>;
};


/** Public user information */
export type PublicUserInfoInterfaceLostTokenAuctionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortByEndDate?: InputMaybe<SortingOption>;
  sport?: InputMaybe<Array<Sport>>;
};


/** Public user information */
export type PublicUserInfoInterfacePaginatedCardsArgs = {
  after?: InputMaybe<Scalars['String']>;
  age?: InputMaybe<Scalars['Int']>;
  assetIds?: InputMaybe<Array<Scalars['String']>>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  owned?: InputMaybe<Scalars['Boolean']>;
  ownedSinceAfter?: InputMaybe<Scalars['ISO8601DateTime']>;
  positions?: InputMaybe<Array<Position>>;
  rarities?: InputMaybe<Array<Rarity>>;
  serialNumber?: InputMaybe<Scalars['Int']>;
  shirtNumber?: InputMaybe<Scalars['Int']>;
  slugs?: InputMaybe<Array<Scalars['String']>>;
};


/** Public user information */
export type PublicUserInfoInterfacePaginatedLiveSingleSaleOffersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortByEndDate?: InputMaybe<SortingOption>;
};


/** Public user information */
export type PublicUserInfoInterfaceSingleSaleOffersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortByEndDate?: InputMaybe<SortingOption>;
};


/** Public user information */
export type PublicUserInfoInterfaceSingleSaleTokenOffersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortByEndDate?: InputMaybe<SortingOption>;
  sport?: InputMaybe<Array<Sport>>;
};


/** Public user information */
export type PublicUserInfoInterfaceSoldSingleSaleOffersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortByEndDate?: InputMaybe<SortingOption>;
};


/** Public user information */
export type PublicUserInfoInterfaceSoldSingleSaleTokenOffersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortByEndDate?: InputMaybe<SortingOption>;
  sport?: InputMaybe<Array<Sport>>;
};


/** Public user information */
export type PublicUserInfoInterfaceTokenAuctionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortByEndDate?: InputMaybe<SortingOption>;
  sport?: InputMaybe<Array<Sport>>;
};


/** Public user information */
export type PublicUserInfoInterfaceWonEnglishAuctionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortByEndDate?: InputMaybe<SortingOption>;
};


/** Public user information */
export type PublicUserInfoInterfaceWonTokenAuctionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortByEndDate?: InputMaybe<SortingOption>;
  sport?: InputMaybe<Array<Sport>>;
};

export type Query = {
  __typename?: 'Query';
  /** Get a list of all cards */
  allCards: CardConnection;
  /** Get latest announcements */
  announcements: AnnouncementConnection;
  /** Get a bundled auction */
  bundledAuction: BundledAuction;
  /**
   * Fetch bundled auctions
   * @deprecated Use transferMarket type instead
   */
  bundledAuctions: BundledAuctionConnection;
  /** Get a card */
  card: Card;
  /** Get a card with its asset ID */
  cardByAssetId: Card;
  /** Get a card with its blockchain ID */
  cardByBlockchainId: Card;
  /** Get a cart edition */
  cardEdition: CardEdition;
  /** Get a card sample picture quacking like a card */
  cardSamplePicture: Card;
  /** Get a list of cards */
  cards: Array<Card>;
  /** Get a club */
  club: Club;
  /** Get a list of clubs */
  clubs: Array<Club>;
  /** Get the list of clubs that are released and minted */
  clubsReady: Array<Club>;
  /** Get a Competition */
  competition: Competition;
  /** Get config */
  config: Config;
  /** Get a list of countries */
  countries: Array<Country>;
  /** Get a country */
  country: Country;
  /** Get the current block height of Ethereum blockchain */
  currentBlockHeight: Scalars['Int'];
  /**
   * Fetch the current So5 Fixture
   * @deprecated Use default value of so5Fixture
   */
  currentSo5Fixture: So5Fixture;
  /** Fetch the current user. */
  currentUser?: Maybe<CurrentUser>;
  /** Get a CustomDeck */
  customDeck: CustomDeck;
  /** Get a DeckInFormation */
  deckInFormation: DeckInFormation;
  /** Get an english auction */
  englishAuction: BundledAuction;
  /** Get a list of cards owned by an ethereum account */
  ethereumCards: Array<Card>;
  /** Get a list of tokens owned by an ethereum account */
  ethereumTokens: Array<Token>;
  /** Get the featured list of So5Fixture (currently relevant So5 fixtures) */
  featuredSo5Fixtures: Array<So5Fixture>;
  /** Get a Game */
  game: Game;
  leaguesOpenForGameStats: Array<Competition>;
  /** Get a national team */
  nationalTeam: NationalTeam;
  /** Get a list of national teams */
  nationalTeams: Array<NationalTeam>;
  /** Get the next batch nonce for a given address */
  nextRelayBatchNonce: Scalars['Int'];
  /** Fetches an object given its ID. */
  node?: Maybe<Node>;
  /** Fetches a list of objects given a list of IDs. */
  nodes: Array<Maybe<Node>>;
  /** Get an OAuth application from the client id */
  oauthApplication: OAuthApplication;
  /**
   * Get a pack
   * @deprecated We do not sell packs anymore
   */
  pack: Pack;
  /**
   * Get packs on sale
   * @deprecated We do not sell packs anymore
   */
  packs: Array<Pack>;
  /** Get a player */
  player: Player;
  /** Get a list of players */
  players: Array<Player>;
  /** Get a potential referrer for a given name */
  referrer?: Maybe<Scalars['String']>;
  /** Get information needed to screenshot a card */
  screenshottableCard: ScreenshottableCard;
  /** Get a season */
  season: Season;
  /**
   * Fetch single sale offers
   * @deprecated Use transferMarket type instead
   */
  singleSaleOffers: SingleSaleOfferConnection;
  /** Get paginated available skins */
  skins: SkinConnection;
  /** Get an So5Appearance */
  so5Appearance: So5Appearance;
  /** Get a So5Fixture */
  so5Fixture: So5Fixture;
  /** Get a list of So5Fixture */
  so5Fixtures: So5FixtureConnection;
  /** Get a So5Leaderboard */
  so5Leaderboard: So5Leaderboard;
  /** Get a So5League */
  so5League: So5League;
  /** Get a So5Lineup */
  so5Lineup: So5Lineup;
  /** Get a So5Ranking */
  so5Ranking: So5Ranking;
  /**
   * Get paginated rankings for a leaderboard
   * @deprecated use so5Leaderboard query
   */
  so5Rankings: So5RankingsPaginated;
  /** Get a So5Reward */
  so5Reward: So5Reward;
  /** Get a So5Score */
  so5Score: So5Score;
  /** Get a Starkware account. */
  starkwareAccount: StarkwareAccount;
  tokens: TokenRoot;
  transferMarket: TransferMarket;
  /** Get a user. */
  user: User;
  /** Get a user by ID. */
  userById: User;
  /** Get a list of users. */
  users: Array<User>;
};


export type QueryAllCardsArgs = {
  after?: InputMaybe<Scalars['String']>;
  age?: InputMaybe<Scalars['Int']>;
  assetIds?: InputMaybe<Array<Scalars['String']>>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  owned?: InputMaybe<Scalars['Boolean']>;
  positions?: InputMaybe<Array<Position>>;
  rarities?: InputMaybe<Array<Rarity>>;
  serialNumber?: InputMaybe<Scalars['Int']>;
  shirtNumber?: InputMaybe<Scalars['Int']>;
  slugs?: InputMaybe<Array<Scalars['String']>>;
};


export type QueryAnnouncementsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type QueryBundledAuctionArgs = {
  slug: Scalars['String'];
};


export type QueryBundledAuctionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type QueryCardArgs = {
  slug: Scalars['String'];
};


export type QueryCardByAssetIdArgs = {
  assetId: Scalars['String'];
};


export type QueryCardByBlockchainIdArgs = {
  blockchainId: Scalars['String'];
};


export type QueryCardEditionArgs = {
  name: Scalars['String'];
};


export type QueryCardSamplePictureArgs = {
  id: Scalars['String'];
};


export type QueryCardsArgs = {
  age?: InputMaybe<Scalars['Int']>;
  assetIds?: InputMaybe<Array<Scalars['String']>>;
  owned?: InputMaybe<Scalars['Boolean']>;
  positions?: InputMaybe<Array<Position>>;
  rarities?: InputMaybe<Array<Rarity>>;
  serialNumber?: InputMaybe<Scalars['Int']>;
  shirtNumber?: InputMaybe<Scalars['Int']>;
  slugs?: InputMaybe<Array<Scalars['String']>>;
};


export type QueryClubArgs = {
  slug: Scalars['String'];
};


export type QueryClubsArgs = {
  slugs: Array<Scalars['String']>;
};


export type QueryCompetitionArgs = {
  slug: Scalars['String'];
};


export type QueryCountriesArgs = {
  slugs: Array<Scalars['String']>;
};


export type QueryCountryArgs = {
  slug: Scalars['String'];
};


export type QueryCustomDeckArgs = {
  slug: Scalars['String'];
};


export type QueryDeckInFormationArgs = {
  slug: Scalars['String'];
};


export type QueryEnglishAuctionArgs = {
  slug: Scalars['String'];
};


export type QueryEthereumCardsArgs = {
  address: Scalars['String'];
};


export type QueryEthereumTokensArgs = {
  address: Scalars['String'];
};


export type QueryFeaturedSo5FixturesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type QueryGameArgs = {
  id: Scalars['ID'];
};


export type QueryNationalTeamArgs = {
  slug: Scalars['String'];
};


export type QueryNationalTeamsArgs = {
  slugs: Array<Scalars['String']>;
};


export type QueryNextRelayBatchNonceArgs = {
  address: Scalars['String'];
};


export type QueryNodeArgs = {
  id: Scalars['ID'];
};


export type QueryNodesArgs = {
  ids: Array<Scalars['ID']>;
};


export type QueryOauthApplicationArgs = {
  clientId: Scalars['String'];
};


export type QueryPackArgs = {
  id: Scalars['String'];
};


export type QueryPacksArgs = {
  size?: InputMaybe<Scalars['Int']>;
};


export type QueryPlayerArgs = {
  slug: Scalars['String'];
};


export type QueryPlayersArgs = {
  slugs: Array<Scalars['String']>;
};


export type QueryReferrerArgs = {
  name: Scalars['String'];
};


export type QueryScreenshottableCardArgs = {
  id: Scalars['ID'];
  serialNumber?: InputMaybe<Scalars['Int']>;
};


export type QuerySeasonArgs = {
  startYear: Scalars['Int'];
};


export type QuerySingleSaleOffersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type QuerySkinsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  position?: InputMaybe<SkinPosition>;
  unlockedOnly?: InputMaybe<Scalars['Boolean']>;
};


export type QuerySo5AppearanceArgs = {
  id: Scalars['ID'];
};


export type QuerySo5FixtureArgs = {
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<So5State>;
};


export type QuerySo5FixturesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type QuerySo5LeaderboardArgs = {
  slug: Scalars['String'];
};


export type QuerySo5LeagueArgs = {
  slug: Scalars['String'];
};


export type QuerySo5LineupArgs = {
  id: Scalars['ID'];
};


export type QuerySo5RankingArgs = {
  id: Scalars['ID'];
};


export type QuerySo5RankingsArgs = {
  page: Scalars['Int'];
  pageSize?: InputMaybe<Scalars['Int']>;
  so5LeaderboardSlug: Scalars['String'];
};


export type QuerySo5RewardArgs = {
  slug: Scalars['String'];
};


export type QuerySo5ScoreArgs = {
  id: Scalars['ID'];
};


export type QueryStarkwareAccountArgs = {
  starkKey: Scalars['String'];
};


export type QueryUserArgs = {
  slug: Scalars['String'];
};


export type QueryUserByIdArgs = {
  id: Scalars['String'];
};


export type QueryUsersArgs = {
  slugs: Array<Scalars['String']>;
};

export type Range = {
  __typename?: 'Range';
  /** Max price, in wei. */
  max: Scalars['String'];
  /** Min price, in wei. */
  min: Scalars['String'];
};

export type RaritiesCardLayout = {
  __typename?: 'RaritiesCardLayout';
  common?: Maybe<CardLayout>;
  limited?: Maybe<CardLayout>;
  rare?: Maybe<CardLayout>;
  superRare?: Maybe<CardLayout>;
  unique?: Maybe<CardLayout>;
};

export enum Rarity {
  Common = 'common',
  Limited = 'limited',
  Rare = 'rare',
  SuperRare = 'super_rare',
  Unique = 'unique'
}

/** A referral */
export type Referral = Node & {
  __typename?: 'Referral';
  aasmState: Scalars['String'];
  expirationDate: Scalars['ISO8601DateTime'];
  id: Scalars['ID'];
  referee: User;
  refereeCardsBoughtAtAuctionCount: Scalars['Int'];
  refereeConfirmedAt?: Maybe<Scalars['ISO8601DateTime']>;
  refereeIdentification?: Maybe<Scalars['String']>;
  refereeInvitationSentAt?: Maybe<Scalars['ISO8601DateTime']>;
  referrer: Referrer;
  referrerReward?: Maybe<ReferralReward>;
};

/** A Referral campaign */
export type ReferralCampaign = Node & {
  __typename?: 'ReferralCampaign';
  cardsCount?: Maybe<Scalars['Int']>;
  competitions: Array<Competition>;
  endDate: Scalars['ISO8601DateTime'];
  id: Scalars['ID'];
  playerPoolUrl?: Maybe<Scalars['String']>;
  playingStatuses?: Maybe<Array<Scalars['String']>>;
  startDate: Scalars['ISO8601DateTime'];
  teams: Array<Team>;
  tiers?: Maybe<Array<CardQuality>>;
};

export type ReferralPaginated = {
  __typename?: 'ReferralPaginated';
  id: Scalars['String'];
  pages: Scalars['Int'];
  referrals: Array<Referral>;
  totalCount: Scalars['Int'];
};

/** A referral reward */
export type ReferralReward = Node & {
  __typename?: 'ReferralReward';
  card: Card;
  id: Scalars['ID'];
  shippingState: ShippingState;
};

/** A user notification regarding a referral reward */
export type ReferralRewardNotification = Node & NotificationInterface & {
  __typename?: 'ReferralRewardNotification';
  createdAt: Scalars['ISO8601DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  read: Scalars['Boolean'];
  referralReward: ReferralReward;
  user: CurrentUser;
};

export enum ReferralState {
  All = 'ALL',
  Completed = 'COMPLETED',
  Expired = 'EXPIRED',
  InProgress = 'IN_PROGRESS'
}

/** Object that can be a referrer */
export type Referrer = User | UserSource;

export enum RestrictionGroup {
  AcademyGroup = 'ACADEMY_GROUP',
  BlockchainGroup = 'BLOCKCHAIN_GROUP'
}

/** A rewarded card */
export type RewardCard = Node & {
  __typename?: 'RewardCard';
  card: Card;
  id: Scalars['ID'];
  pictureUrl?: Maybe<Scalars['String']>;
  quality?: Maybe<Scalars['String']>;
  so5Reward?: Maybe<So5Reward>;
  upgradedQuality?: Maybe<Scalars['String']>;
};

/** Aggregated rewards overview */
export type RewardsOverview = {
  __typename?: 'RewardsOverview';
  cards: Scalars['Json'];
  prizePool: Scalars['Float'];
  prizePoolCurrency: PaymentCurrency;
};

/** A user notification regarding a Sale */
export type SaleNotification = Node & NotificationInterface & {
  __typename?: 'SaleNotification';
  buyer?: Maybe<User>;
  card: Card;
  createdAt: Scalars['ISO8601DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  priceInWei: Scalars['String'];
  read: Scalars['Boolean'];
  seller: User;
  user: CurrentUser;
};

/** Information needed for a card screenshot */
export type ScreenshottableCard = {
  __typename?: 'ScreenshottableCard';
  age: Scalars['Int'];
  baseballPositions?: Maybe<Array<BaseballPosition>>;
  birthPlaceCountry: Scalars['String'];
  cropped: Scalars['Boolean'];
  footballPosition?: Maybe<FootballPosition>;
  layout: CardLayout;
  playerDisplayName: Scalars['String'];
  playerPicture: SeasonPicture;
  position?: Maybe<Scalars['String']>;
  rarity: Rarity;
  season: Scalars['Int'];
  serialNumber: Scalars['Int'];
  shirtNumber: Scalars['Int'];
  singleCivilYear: Scalars['Boolean'];
  sport: Sport;
  teamPictureUrl: Scalars['String'];
  teamShortName: Scalars['String'];
};

/** A football season */
export type Season = Node & WithPublicCardsInterface & {
  __typename?: 'Season';
  /** The `cards` field cannot be nested within a list. */
  cards: CardConnection;
  id: Scalars['ID'];
  name: Scalars['String'];
  startYear: Scalars['Int'];
};


/** A football season */
export type SeasonCardsArgs = {
  after?: InputMaybe<Scalars['String']>;
  age?: InputMaybe<Scalars['Int']>;
  assetIds?: InputMaybe<Array<Scalars['String']>>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  owned?: InputMaybe<Scalars['Boolean']>;
  positions?: InputMaybe<Array<Position>>;
  rarities?: InputMaybe<Array<Rarity>>;
  serialNumber?: InputMaybe<Scalars['Int']>;
  shirtNumber?: InputMaybe<Scalars['Int']>;
  slugs?: InputMaybe<Array<Scalars['String']>>;
};

/** A player season picture */
export type SeasonPicture = Node & WithPictureInterface & {
  __typename?: 'SeasonPicture';
  backgroundUrl?: Maybe<Scalars['String']>;
  chinY?: Maybe<Scalars['Float']>;
  chinYTarget?: Maybe<Scalars['Int']>;
  /** @deprecated Replaced by team */
  club?: Maybe<Club>;
  eyeLeft: FaceLandmark;
  eyeRight: FaceLandmark;
  height: Scalars['Int'];
  id: Scalars['ID'];
  kit?: Maybe<Scalars['String']>;
  nose: FaceLandmark;
  offsetX: Scalars['Int'];
  offsetY: Scalars['Int'];
  pictureUrl?: Maybe<Scalars['String']>;
  player: Player;
  team: Team;
  width: Scalars['Int'];
};


/** A player season picture */
export type SeasonPicturePictureUrlArgs = {
  derivative?: InputMaybe<Scalars['String']>;
};

export enum ShippingState {
  Claimed = 'CLAIMED',
  ReadyToClaim = 'READY_TO_CLAIM'
}

/** A Single Buy Offer Min Price */
export type SingleBuyOfferMinPrice = Node & {
  __typename?: 'SingleBuyOfferMinPrice';
  amount: Scalars['String'];
  card: Card;
  id: Scalars['ID'];
  isPrivate: Scalars['Boolean'];
  user: User;
};

/** An Single Sale Offer on a Card */
export type SingleSaleOffer = Node & OfferInterface & {
  __typename?: 'SingleSaleOffer';
  aasmState: Scalars['String'];
  acceptedAt?: Maybe<Scalars['ISO8601DateTime']>;
  acceptor?: Maybe<User>;
  blockchainId?: Maybe<Scalars['String']>;
  cancelledAt?: Maybe<Scalars['ISO8601DateTime']>;
  card: Card;
  createdAt: Scalars['ISO8601DateTime'];
  creditCardFee: Scalars['Float'];
  endDate: Scalars['ISO8601DateTime'];
  id: Scalars['ID'];
  open: Scalars['Boolean'];
  price: Scalars['String'];
  priceInFiat: Fiat;
  sender: Ownerable;
  startDate: Scalars['ISO8601DateTime'];
};

/** The connection type for SingleSaleOffer. */
export type SingleSaleOfferConnection = {
  __typename?: 'SingleSaleOfferConnection';
  /** A list of edges. */
  edges: Array<SingleSaleOfferEdge>;
  /** A list of nodes. */
  nodes: Array<SingleSaleOffer>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

/** An edge in a connection. */
export type SingleSaleOfferEdge = {
  __typename?: 'SingleSaleOfferEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<SingleSaleOffer>;
};

/** A skin to customize a user gallery */
export type Skin = Node & {
  __typename?: 'Skin';
  color?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  pictureUrl: Scalars['String'];
  position: SkinPosition;
  price: Scalars['Int'];
  quality: SkinQuality;
  unlocked: Scalars['Boolean'];
};

/** The connection type for Skin. */
export type SkinConnection = {
  __typename?: 'SkinConnection';
  /** A list of edges. */
  edges: Array<SkinEdge>;
  /** A list of nodes. */
  nodes: Array<Skin>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type SkinEdge = {
  __typename?: 'SkinEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<Skin>;
};

export enum SkinPosition {
  Banner = 'BANNER',
  Shield = 'SHIELD'
}

export enum SkinQuality {
  Amateur = 'AMATEUR',
  Legend = 'LEGEND',
  Pro = 'PRO',
  SemiPro = 'SEMI_PRO'
}

/** A SO5 Appearance - a card selected in a team for a SO5 fixture */
export type So5Appearance = Node & {
  __typename?: 'So5Appearance';
  bonus?: Maybe<Scalars['Float']>;
  captain: Scalars['Boolean'];
  card: Card;
  cleanScore?: Maybe<Scalars['Float']>;
  game?: Maybe<Game>;
  id: Scalars['ID'];
  playerGameStats?: Maybe<PlayerGameStats>;
  relevantStats: Scalars['Json'];
  /** @deprecated Use score under so5Score */
  score?: Maybe<Scalars['Float']>;
  so5Fixture: So5Fixture;
  /** @deprecated Not maintained anymore, use game instead */
  so5Game?: Maybe<So5Game>;
  so5Lineup: So5Lineup;
  so5Score?: Maybe<So5Score>;
  status: Scalars['String'];
};

/** A SO5 Appearance - a card selected in a team for a SO5 fixture */
export type So5AppearanceInput = {
  captain: Scalars['Boolean'];
  cardSlug: Scalars['String'];
};

/** The at least of clubs rule of a So5Leaderboard */
export type So5AtLeastOfClubs = {
  __typename?: 'So5AtLeastOfClubs';
  clubs: Array<Club>;
  min: Scalars['Int'];
};

/** The at least of competitions rule of a So5Leaderboard */
export type So5AtLeastOfCompetitions = {
  __typename?: 'So5AtLeastOfCompetitions';
  competitions: Array<Competition>;
  min: Scalars['Int'];
};

/** So5 Global Config */
export type So5Config = {
  __typename?: 'So5Config';
  id: Scalars['ID'];
  /** Fetch teams playing in the upcoming So5 Fixture */
  nextSo5FixtureTeams: Array<Team>;
  so5LeaguesAlgoliaFilters: Scalars['Json'];
  /** List of all the possible tournament rarity types */
  tournamentRarityTypes: Array<Scalars['String']>;
  /** List of all the possible tournament types */
  tournamentTypes: Array<Scalars['String']>;
};

/** A SO5 fixture */
export type So5Fixture = Node & {
  __typename?: 'So5Fixture';
  aasmState: Scalars['String'];
  /** @deprecated Can be found with mySo5Lineups */
  appearancesInFixtureInterval: Array<So5Appearance>;
  canCompose: Scalars['Boolean'];
  cutOffDate: Scalars['ISO8601DateTime'];
  endDate: Scalars['ISO8601DateTime'];
  eventType: Scalars['String'];
  gameWeek: Scalars['Int'];
  /** The `games` field cannot be nested within a list. */
  games: Array<Game>;
  hashedSalt?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** @deprecated Use sorted leaderboards instead */
  myRecommendedSo5Leaderboards: So5LeaderboardConnection;
  /** The `my_so5_games` field cannot be nested within a list. */
  mySo5Games: Array<Game>;
  mySo5Lineups: Array<So5Lineup>;
  /** The `my_so5_lineups_count` field cannot be nested within a list. */
  mySo5LineupsCount: Scalars['Int'];
  mySo5LineupsPaginated: So5LineupConnection;
  mySo5Rankings: Array<So5Ranking>;
  mySo5Rewards: Array<So5Reward>;
  myTotalXpWon: Scalars['Int'];
  /** The `next` field cannot be nested within a list. */
  next?: Maybe<So5Fixture>;
  /** The `onboarding_so5_leaderboard` field cannot be nested within a list. */
  onboardingSo5Leaderboard?: Maybe<So5Leaderboard>;
  /** The `ordered_so5_scores` field cannot be nested within a list. */
  orderedSo5Scores: Array<OrderedSo5Scores>;
  /** Get ordered So5Score by position */
  orderedSo5ScoresByPosition: So5ScoreConnection;
  /** The `previous` field cannot be nested within a list. */
  previous?: Maybe<So5Fixture>;
  replayedFixture?: Maybe<So5Fixture>;
  salt?: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  /** The `so5_leaderboards` field cannot be nested within a list. */
  so5Leaderboards: Array<So5Leaderboard>;
  /** The `so5_leaderboards_paginated` field cannot be nested within a list. */
  so5LeaderboardsPaginated: So5LeaderboardConnection;
  /** The `so5_leagues` field cannot be nested within a list. */
  so5Leagues: Array<So5League>;
  /** The `so5_lineups_from_restriction_group` field cannot be nested within a list. */
  so5LineupsFromRestrictionGroup: Scalars['Boolean'];
  /** @deprecated Use leaderboard rewards instead */
  so5Rewards: Array<So5Reward>;
  specialWeeklyBanner?: Maybe<SpecialWeeklyBanner>;
  startDate: Scalars['ISO8601DateTime'];
};


/** A SO5 fixture */
export type So5FixtureMyRecommendedSo5LeaderboardsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** A SO5 fixture */
export type So5FixtureMySo5LineupsArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  so5LeaderboardSlug?: InputMaybe<Scalars['String']>;
  sortType?: InputMaybe<CustomSortingOption>;
  withTraining?: InputMaybe<Scalars['Boolean']>;
};


/** A SO5 fixture */
export type So5FixtureMySo5LineupsCountArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  so5LeaderboardSlug?: InputMaybe<Scalars['String']>;
  training?: InputMaybe<Scalars['Boolean']>;
};


/** A SO5 fixture */
export type So5FixtureMySo5LineupsPaginatedArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  draft?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  so5LeaderboardSlug?: InputMaybe<Scalars['String']>;
  sortType?: InputMaybe<CustomSortingOption>;
  withTraining?: InputMaybe<Scalars['Boolean']>;
};


/** A SO5 fixture */
export type So5FixtureMySo5RankingsArgs = {
  withDraft?: InputMaybe<Scalars['Boolean']>;
  withTraining?: InputMaybe<Scalars['Boolean']>;
};


/** A SO5 fixture */
export type So5FixtureOrderedSo5ScoresArgs = {
  first: Scalars['Int'];
};


/** A SO5 fixture */
export type So5FixtureOrderedSo5ScoresByPositionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  minScore?: InputMaybe<Scalars['Int']>;
  position: Scalars['String'];
};


/** A SO5 fixture */
export type So5FixtureSo5LeaderboardsArgs = {
  sortType?: InputMaybe<CustomSortingOption>;
};


/** A SO5 fixture */
export type So5FixtureSo5LeaderboardsPaginatedArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortType?: InputMaybe<CustomSortingOption>;
};


/** A SO5 fixture */
export type So5FixtureSo5LineupsFromRestrictionGroupArgs = {
  restrictionGroup: RestrictionGroup;
};

/** The connection type for So5Fixture. */
export type So5FixtureConnection = {
  __typename?: 'So5FixtureConnection';
  /** A list of edges. */
  edges: Array<So5FixtureEdge>;
  /** A list of nodes. */
  nodes: Array<So5Fixture>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type So5FixtureEdge = {
  __typename?: 'So5FixtureEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<So5Fixture>;
};

/** A SO5 Game - a game included in a SO5 fixture (deprecated) */
export type So5Game = Node & {
  __typename?: 'So5Game';
  game: Game;
  id: Scalars['ID'];
  so5Fixture: So5Fixture;
};

/** A SO5 Leaderboard */
export type So5Leaderboard = Node & So5LeaderboardRulesInterface & {
  __typename?: 'So5Leaderboard';
  /** @deprecated Use myEligibleCards instead */
  algoliaFilters?: Maybe<Scalars['String']>;
  canCompose: Validity;
  challenges: Array<Challenge>;
  defaultAverageScore?: Maybe<AveragePlayerScore>;
  description?: Maybe<Scalars['String']>;
  displayName: Scalars['String'];
  division: Scalars['Int'];
  enabled: Scalars['Boolean'];
  engineConfiguration: EngineConfiguration;
  iconUrl?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** The `my_eligible_cards` field cannot be nested within a list. */
  myEligibleCards: CardConnection;
  mySo5Lineups: Array<So5Lineup>;
  mySo5Rankings: Array<So5Ranking>;
  /** @deprecated Replaced by title */
  name: Scalars['String'];
  powerCap?: Maybe<Scalars['Float']>;
  rarityType: Scalars['String'];
  rewardedLineupsCount: Scalars['Int'];
  /** @deprecated Replaced by rewardsConfig */
  rewards: Scalars['Json'];
  rewardsConfig: LeaderboardRewardsConfig;
  rules?: Maybe<So5Rules>;
  scoringEngine?: Maybe<Scalars['String']>;
  /** @deprecated Not in use anymore */
  shieldName?: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  so5Fixture: So5Fixture;
  so5League: So5League;
  so5Lineup?: Maybe<So5Lineup>;
  /** @deprecated Use so5LineupsPaginated instead */
  so5Lineups: Array<So5Lineup>;
  so5LineupsCount: Scalars['Int'];
  /** The `so5_lineups_paginated` field cannot be nested within a list. */
  so5LineupsPaginated: So5LineupConnection;
  /** Get associated rankings. Empty until fixture is closed. The `so5_rankings` field cannot be nested within a list. */
  so5Rankings: So5RankingConnection;
  /** Get associated rankings, sorted by rank in ascending order. Empty until fixture is closed. The `so5_rankings_paginated` field cannot be nested within a list. */
  so5RankingsPaginated: So5RankingsPaginated;
  /** The `so5_rankings_preview` field cannot be nested within a list. */
  so5RankingsPreview: Array<So5Ranking>;
  /** Get associated rewards. Empty until fixture is closed. The `so5_rewards` field cannot be nested within a list. */
  so5Rewards: So5RewardConnection;
  teamsCap?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  /** High level overview of the rewards for the leaderboard */
  totalRewards: RewardsOverview;
  tournamentType: Scalars['String'];
};


/** A SO5 Leaderboard */
export type So5LeaderboardMyEligibleCardsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  includeNoGame?: InputMaybe<Scalars['Boolean']>;
  includeUsed?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  position?: InputMaybe<Position>;
  query?: InputMaybe<Scalars['String']>;
  rarities?: InputMaybe<Array<Rarity>>;
  selectedCards: Array<Scalars['String']>;
};


/** A SO5 Leaderboard */
export type So5LeaderboardSo5LineupArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** A SO5 Leaderboard */
export type So5LeaderboardSo5LineupsPaginatedArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** A SO5 Leaderboard */
export type So5LeaderboardSo5RankingsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  onlyFollowed?: InputMaybe<Scalars['Boolean']>;
};


/** A SO5 Leaderboard */
export type So5LeaderboardSo5RankingsPaginatedArgs = {
  onlyFollowed?: InputMaybe<Scalars['Boolean']>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};


/** A SO5 Leaderboard */
export type So5LeaderboardSo5RewardsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** The connection type for So5Leaderboard. */
export type So5LeaderboardConnection = {
  __typename?: 'So5LeaderboardConnection';
  /** A list of edges. */
  edges: Array<So5LeaderboardEdge>;
  /** A list of nodes. */
  nodes: Array<So5Leaderboard>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type So5LeaderboardEdge = {
  __typename?: 'So5LeaderboardEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<So5Leaderboard>;
};

/** So5Leaderboard Rules */
export type So5LeaderboardRulesInterface = {
  defaultAverageScore?: Maybe<AveragePlayerScore>;
  rules?: Maybe<So5Rules>;
};

/** A So5 league */
export type So5League = Node & {
  __typename?: 'So5League';
  category: Scalars['String'];
  /** @deprecated No longer maintained */
  description?: Maybe<Scalars['String']>;
  displayName: Scalars['String'];
  /** The `games` field cannot be nested within a list. */
  games: Array<Game>;
  id: Scalars['ID'];
  /** The `my_so5_games` field cannot be nested within a list. */
  mySo5Games: Array<Game>;
  name: Scalars['String'];
  restrictionGroup?: Maybe<RestrictionGroup>;
  rewardPool: Array<PlayerWithSupply>;
  shortDisplayName: Scalars['String'];
  slug: Scalars['String'];
  so5Fixture: So5Fixture;
  so5Leaderboards: Array<So5Leaderboard>;
};


/** A So5 league */
export type So5LeagueRewardPoolArgs = {
  quality: Scalars['String'];
  rarity: Scalars['String'];
};

/** A SO5 lineup */
export type So5Lineup = Node & SocialPicturesInterface & {
  __typename?: 'So5Lineup';
  draft: Scalars['Boolean'];
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  /** @deprecated use so5Rankings.score */
  score?: Maybe<Scalars['String']>;
  so5Appearances: Array<So5Appearance>;
  so5Fixture: So5Fixture;
  so5Leaderboard?: Maybe<So5Leaderboard>;
  /** Only 1 ranking is returned. An array because a lineup could be played in multiple leaderboards previously. */
  so5Rankings: Array<So5Ranking>;
  socialPictureUrls: SocialPictureDerivative;
  user: User;
};

/** The connection type for So5Lineup. */
export type So5LineupConnection = {
  __typename?: 'So5LineupConnection';
  /** A list of edges. */
  edges: Array<So5LineupEdge>;
  /** A list of nodes. */
  nodes: Array<So5Lineup>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type So5LineupEdge = {
  __typename?: 'So5LineupEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<So5Lineup>;
};

/** A user notification regarding a So5Lineup */
export type So5LineupNotification = Node & NotificationInterface & {
  __typename?: 'So5LineupNotification';
  card?: Maybe<Card>;
  createdAt: Scalars['ISO8601DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  read: Scalars['Boolean'];
  so5Lineup: So5Lineup;
  user: CurrentUser;
};

/** A SO5 Ranking */
export type So5Ranking = Node & {
  __typename?: 'So5Ranking';
  eligibleForReward: Scalars['Boolean'];
  eligibleRewards: Array<So5RewardConfig>;
  id: Scalars['ID'];
  ranking?: Maybe<Scalars['Int']>;
  score: Scalars['Float'];
  so5Fixture: So5Fixture;
  so5Leaderboard: So5Leaderboard;
  so5Lineup: So5Lineup;
};

/** The connection type for So5Ranking. */
export type So5RankingConnection = {
  __typename?: 'So5RankingConnection';
  /** A list of edges. */
  edges: Array<So5RankingEdge>;
  /** A list of nodes. */
  nodes: Array<So5Ranking>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type So5RankingEdge = {
  __typename?: 'So5RankingEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<So5Ranking>;
};

export type So5RankingsPaginated = {
  __typename?: 'So5RankingsPaginated';
  currentPage: Scalars['Int'];
  id: Scalars['String'];
  pages: Scalars['Int'];
  so5Rankings: Array<So5Ranking>;
  totalCount: Scalars['Int'];
};

/** The rarity rule of a So5Leaderboard */
export type So5Rarity = {
  __typename?: 'So5Rarity';
  common: ValueBoundaries;
  limited: ValueBoundaries;
  rare: ValueBoundaries;
  superRare: ValueBoundaries;
  unique: ValueBoundaries;
};

/** A SO5 Reward */
export type So5Reward = Node & {
  __typename?: 'So5Reward';
  aasmState: Scalars['String'];
  /** @deprecated Replaced by rewardCards */
  cards: Array<Card>;
  id: Scalars['ID'];
  /** @deprecated Replaced by so5Ranking */
  ranking: Scalars['Int'];
  rewardCards: Array<RewardCard>;
  slug: Scalars['String'];
  so5Fixture: So5Fixture;
  so5Leaderboard: So5Leaderboard;
  so5Ranking?: Maybe<So5Ranking>;
  weiAmount: Scalars['String'];
};

/** A So5 Reward card config */
export type So5RewardCardConfig = {
  __typename?: 'So5RewardCardConfig';
  cardEdition?: Maybe<CardEdition>;
  player?: Maybe<Player>;
  quality?: Maybe<CardQuality>;
  quantity: Scalars['Int'];
  rarity: Rarity;
};

/** A So5 Reward config */
export type So5RewardConfig = {
  __typename?: 'So5RewardConfig';
  cards?: Maybe<Array<So5RewardCardConfig>>;
  /** Rewarded amount in ETH when fixed in ETH */
  ethAmount?: Maybe<Scalars['Float']>;
  /** @deprecated useless */
  id?: Maybe<Scalars['String']>;
  /** Minimum USD amount guaranteed when prizes are in ETH */
  minimumGuaranteedUsdAmount?: Maybe<Scalars['Float']>;
  rankPct?: Maybe<Scalars['Float']>;
  ranks?: Maybe<Scalars['Int']>;
  score?: Maybe<Scalars['Float']>;
  /** Rewarded amount in USD when fixed in USD */
  usdAmount?: Maybe<Scalars['Float']>;
};

/** The connection type for So5Reward. */
export type So5RewardConnection = {
  __typename?: 'So5RewardConnection';
  /** A list of edges. */
  edges: Array<So5RewardEdge>;
  /** A list of nodes. */
  nodes: Array<So5Reward>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type So5RewardEdge = {
  __typename?: 'So5RewardEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<So5Reward>;
};

/** The rule set of a So5Leaderboard */
export type So5Rules = {
  __typename?: 'So5Rules';
  activeClubs?: Maybe<Array<Club>>;
  age?: Maybe<Age>;
  allowLegend: Scalars['Boolean'];
  atLeastOfClubs?: Maybe<So5AtLeastOfClubs>;
  atLeastOfCompetitions?: Maybe<So5AtLeastOfCompetitions>;
  /** @deprecated No longer maintained */
  averageScore?: Maybe<ValueOpenBoundaries>;
  /** @deprecated No longer maintained */
  averageScorePlayersCount?: Maybe<AverageScorePlayersCount>;
  captain?: Maybe<Scalars['Json']>;
  captainRarities?: Maybe<Array<Scalars['String']>>;
  /** Enforces restrictions on the card's editions in this leaderboard when set. */
  cardEditionsCount?: Maybe<CardEditionsCount>;
  /** @deprecated No longer maintained */
  clubs?: Maybe<Array<Club>>;
  competitions?: Maybe<Array<Competition>>;
  id: Scalars['String'];
  internationalCompetitions?: Maybe<Array<Competition>>;
  leagues?: Maybe<Array<Competition>>;
  /** @deprecated replaced by age */
  maxAge?: Maybe<Scalars['Int']>;
  maximumPlayersAverageScore?: Maybe<AverageScoreOpenBoundaries>;
  /** @deprecated replaced by age */
  minAge?: Maybe<Scalars['Int']>;
  minimumPlayersAverageScore?: Maybe<AverageScoreOpenBoundaries>;
  nationalities?: Maybe<Array<Country>>;
  notDomesticCompetitions?: Maybe<Array<Competition>>;
  notNationalities?: Maybe<Array<Country>>;
  rarities?: Maybe<Array<Scalars['String']>>;
  rarityLimits?: Maybe<So5Rarity>;
  sameActiveClub?: Maybe<ValueOpenBoundaries>;
  /** @deprecated No longer maintained */
  sameClub?: Maybe<Scalars['Boolean']>;
  sameNationality?: Maybe<Scalars['Boolean']>;
  seasons?: Maybe<Array<Season>>;
  serialNumber?: Maybe<Scalars['String']>;
};

/** A SO5 Score */
export type So5Score = Node & {
  __typename?: 'So5Score';
  allAroundStats: Array<StatScore>;
  decisiveScore?: Maybe<StatScore>;
  detailedScore: Array<StatScore>;
  game: Game;
  id: Scalars['ID'];
  negativeDecisiveStats: Array<StatScore>;
  player: Player;
  playerGameStats: PlayerGameStats;
  position: Scalars['String'];
  positiveDecisiveStats: Array<StatScore>;
  score?: Maybe<Scalars['Float']>;
  scoringVersion: Scalars['Int'];
};

/** The connection type for So5Score. */
export type So5ScoreConnection = {
  __typename?: 'So5ScoreConnection';
  /** A list of edges. */
  edges: Array<So5ScoreEdge>;
  /** A list of nodes. */
  nodes: Array<So5Score>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type So5ScoreEdge = {
  __typename?: 'So5ScoreEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<So5Score>;
};

export enum So5State {
  Live = 'LIVE',
  Past = 'PAST',
  Upcoming = 'UPCOMING'
}

/** A Social picture with all its derivative */
export type SocialPictureDerivative = {
  __typename?: 'SocialPictureDerivative';
  post?: Maybe<Scalars['String']>;
  square?: Maybe<Scalars['String']>;
  story?: Maybe<Scalars['String']>;
};

/** Social pictures */
export type SocialPicturesInterface = {
  socialPictureUrls: SocialPictureDerivative;
};

/** An encrypted private key */
export type SorarePrivateKey = {
  __typename?: 'SorarePrivateKey';
  encryptedPrivateKey: Scalars['String'];
  iv: Scalars['String'];
  salt: Scalars['String'];
};

/** An encrypted private key */
export type SorarePrivateKeyAttributes = {
  encryptedPrivateKey: Scalars['String'];
  iv: Scalars['String'];
  salt: Scalars['String'];
};

export enum SortingOption {
  Asc = 'ASC',
  Desc = 'DESC'
}

/** A special weekly banner */
export type SpecialWeeklyBanner = Node & WithPictureInterface & {
  __typename?: 'SpecialWeeklyBanner';
  background?: Maybe<Scalars['String']>;
  cardUrl?: Maybe<Scalars['String']>;
  href?: Maybe<Scalars['String']>;
  hrefLabel?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  logoUrl?: Maybe<Scalars['String']>;
  pictureUrl?: Maybe<Scalars['String']>;
  prizeLabel?: Maybe<Scalars['String']>;
  sectionName?: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  subtitle?: Maybe<Scalars['String']>;
  title: Scalars['String'];
};


/** A special weekly banner */
export type SpecialWeeklyBannerPictureUrlArgs = {
  derivative?: InputMaybe<Scalars['String']>;
};

export enum Sport {
  Baseball = 'BASEBALL',
  Football = 'FOOTBALL'
}

export type StarkSignatureInput = {
  /** Signature of the associated LimitOrder object, transported as JSON. Computed with `@sorare/crypto`. */
  data: Scalars['String'];
  /** Mandatory if expirationTimestamp is not set */
  expiration?: InputMaybe<Scalars['ISO8601DateTime']>;
  /** Required if expiration is not set */
  expirationTimestamp?: InputMaybe<Scalars['Int']>;
  /** Nonce of the associated LimitOrder object. Retrieved through the `limitOrders` field. */
  nonce: Scalars['Int'];
  starkKey?: InputMaybe<Scalars['String']>;
};

/** A Starkware Account */
export type StarkwareAccount = Node & {
  __typename?: 'StarkwareAccount';
  id: Scalars['ID'];
  starkKey: Scalars['String'];
  user?: Maybe<User>;
};

/** Withdrawal of a token to Ethereum */
export type StarkwareWithdrawal = Node & {
  __typename?: 'StarkwareWithdrawal';
  aasmState: Scalars['String'];
  card?: Maybe<Card>;
  destination?: Maybe<Scalars['String']>;
  ethereumTransaction?: Maybe<EthereumTransaction>;
  id: Scalars['ID'];
};

export enum StatCategory {
  Attacking = 'ATTACKING',
  Defending = 'DEFENDING',
  General = 'GENERAL',
  Goalkeeping = 'GOALKEEPING',
  NegativeDecisiveStat = 'NEGATIVE_DECISIVE_STAT',
  Passing = 'PASSING',
  PositiveDecisiveStat = 'POSITIVE_DECISIVE_STAT',
  Possession = 'POSSESSION',
  Unknown = 'UNKNOWN'
}

/** Score contribution of a given stat */
export type StatScore = {
  __typename?: 'StatScore';
  category: StatCategory;
  points: Scalars['Float'];
  stat: Scalars['String'];
  statValue: Scalars['Float'];
  totalScore: Scalars['Float'];
};

/** Stats of a player for a competition */
export type Stats = {
  __typename?: 'Stats';
  appearances: Scalars['Int'];
  assists: Scalars['Int'];
  goals: Scalars['Int'];
  id: Scalars['String'];
  minutesPlayed: Scalars['Int'];
  /** @deprecated Use the player in the upper context instead */
  player?: Maybe<Player>;
  redCards: Scalars['Int'];
  season?: Maybe<Season>;
  substituteIn: Scalars['Int'];
  substituteOut: Scalars['Int'];
  yellowCards: Scalars['Int'];
};

/** Object that can be subscribed to */
export type Subscribable = Card | Club | Country | Player | User;

export type SubscribableInput = {
  slug: Scalars['String'];
  type: Scalars['String'];
};

export enum SubscribableType {
  BaseballCard = 'BASEBALL_CARD',
  BaseballPlayer = 'BASEBALL_PLAYER',
  Card = 'CARD',
  Country = 'COUNTRY',
  Player = 'PLAYER',
  Team = 'TEAM',
  User = 'USER'
}

/** Type of a subscriber to a new card, player, country or club related auction */
export type Subscriber = CurrentUser;

export type Subscription = {
  __typename?: 'Subscription';
  aCardWasUpdated: CardSubscription;
  bundledAuctionWasUpdated: BundledAuction;
  currentUserWasUpdated: CurrentUser;
  gameWasUpdated: Game;
  offerWasUpdated: Offer;
  /** @deprecated Not used anymore. */
  packWasSold: Pack;
  /** Triggered on new bid or card sold on the public market */
  publicMarketWasUpdated: Card;
  /** Triggered on new bid or ended auction */
  tokenAuctionWasUpdated: TokenAuction;
  /** Triggered on offer accepted/cancelled/ended */
  tokenOfferWasUpdated: TokenOffer;
};


export type SubscriptionACardWasUpdatedArgs = {
  ages?: InputMaybe<Array<Scalars['Int']>>;
  cardEditions?: InputMaybe<Array<Scalars['String']>>;
  events?: InputMaybe<Array<CardWasUpdatedEvent>>;
  owned?: InputMaybe<Scalars['Boolean']>;
  playerSlugs?: InputMaybe<Array<Scalars['String']>>;
  positions?: InputMaybe<Array<Position>>;
  rarities?: InputMaybe<Array<Rarity>>;
  seasonStartYears?: InputMaybe<Array<Scalars['Int']>>;
  serialNumbers?: InputMaybe<Array<Scalars['Int']>>;
  shirtNumbers?: InputMaybe<Array<Scalars['Int']>>;
  slugs?: InputMaybe<Array<Scalars['String']>>;
};


export type SubscriptionPackWasSoldArgs = {
  id: Scalars['ID'];
};


export type SubscriptionTokenAuctionWasUpdatedArgs = {
  sports?: InputMaybe<Array<Sport>>;
};


export type SubscriptionTokenOfferWasUpdatedArgs = {
  sports?: InputMaybe<Array<Sport>>;
};

/** Object that can be a team */
export type Team = Club | NationalTeam;

/** Objects with publicly accessible cards */
export type TeamInterface = {
  activeCompetitions: Array<Competition>;
  /** The `active_memberships` field cannot be nested within a list. */
  activeMemberships: MembershipConnection;
  /** The `active_players` field cannot be nested within a list. */
  activePlayers: PlayerConnection;
  /** The `cards` field cannot be nested within a list. */
  cards: CardConnection;
  code?: Maybe<Scalars['String']>;
  /** @deprecated replaced by colorRight on customBanner */
  colorBottom?: Maybe<Scalars['String']>;
  /** @deprecated replaced by colorLeft on customBanner */
  colorTop?: Maybe<Scalars['String']>;
  country: Country;
  customBanner?: Maybe<CustomBanner>;
  founded?: Maybe<Scalars['String']>;
  /** The `games` field cannot be nested within a list. */
  games: GameConnection;
  id: Scalars['ID'];
  lastFiveGames: Array<Game>;
  /** The `latest_games` field cannot be nested within a list. */
  latestGames: GameConnection;
  /** @deprecated only exposed on cards */
  license: License;
  name: Scalars['String'];
  optaId?: Maybe<Scalars['String']>;
  pictureSecondaryUrl?: Maybe<Scalars['String']>;
  pictureUrl?: Maybe<Scalars['String']>;
  /** @deprecated Replaced teamPictureUrl on CardType */
  pictureUrlByRarity: Scalars['Json'];
  /** The `players` field cannot be nested within a list. */
  players: PlayerConnection;
  ready: Scalars['Boolean'];
  /** The `recent_departures` field cannot be nested within a list. */
  recentDepartures: PlayerConnection;
  slug: Scalars['String'];
  upcomingGames: Array<Maybe<Game>>;
};


/** Objects with publicly accessible cards */
export type TeamInterfaceActiveMembershipsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** Objects with publicly accessible cards */
export type TeamInterfaceActivePlayersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** Objects with publicly accessible cards */
export type TeamInterfaceCardsArgs = {
  after?: InputMaybe<Scalars['String']>;
  age?: InputMaybe<Scalars['Int']>;
  assetIds?: InputMaybe<Array<Scalars['String']>>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  owned?: InputMaybe<Scalars['Boolean']>;
  positions?: InputMaybe<Array<Position>>;
  rarities?: InputMaybe<Array<Rarity>>;
  serialNumber?: InputMaybe<Scalars['Int']>;
  shirtNumber?: InputMaybe<Scalars['Int']>;
  slugs?: InputMaybe<Array<Scalars['String']>>;
};


/** Objects with publicly accessible cards */
export type TeamInterfaceGamesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  endDate: Scalars['ISO8601DateTime'];
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  startDate: Scalars['ISO8601DateTime'];
};


/** Objects with publicly accessible cards */
export type TeamInterfaceLatestGamesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** Objects with publicly accessible cards */
export type TeamInterfacePictureUrlArgs = {
  derivative?: InputMaybe<Scalars['String']>;
};


/** Objects with publicly accessible cards */
export type TeamInterfacePictureUrlByRarityArgs = {
  derivative?: InputMaybe<Scalars['String']>;
};


/** Objects with publicly accessible cards */
export type TeamInterfacePlayersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** Objects with publicly accessible cards */
export type TeamInterfaceRecentDeparturesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** Objects with publicly accessible cards */
export type TeamInterfaceUpcomingGamesArgs = {
  first: Scalars['Int'];
};

/** Represents a list of players available for a minting quota organized by tiers */
export type TieredPlayerPool = {
  __typename?: 'TieredPlayerPool';
  tier0: Array<Scalars['String']>;
  tier1: Array<Scalars['String']>;
  tier2: Array<Scalars['String']>;
  tier3: Array<Scalars['String']>;
};

/** A title body notification rendered for mobile */
export type TitleBodyNotificationMobileRendering = {
  __typename?: 'TitleBodyNotificationMobileRendering';
  body: Scalars['String'];
  deepLinkUrl: Scalars['String'];
  iconUrl?: Maybe<Scalars['String']>;
  title: Scalars['String'];
};

/** A title body notification rendering instruction */
export type TitleBodyNotificationRendering = {
  __typename?: 'TitleBodyNotificationRendering';
  mobile?: Maybe<TitleBodyNotificationMobileRendering>;
};

export type Token = Node & {
  __typename?: 'Token';
  assetId: Scalars['String'];
  collectionName?: Maybe<Scalars['String']>;
  contractAddress: Scalars['String'];
  ethereumId: Scalars['String'];
  id: Scalars['ID'];
  latestEnglishAuction?: Maybe<TokenAuction>;
  latestOwner?: Maybe<TokenOwner>;
  liveSingleBuyOffers: Array<TokenOffer>;
  liveSingleSaleOffer?: Maybe<TokenOffer>;
  metadata: TokenMetadata;
  myMintedSingleSaleOffer?: Maybe<TokenOffer>;
  name: Scalars['String'];
  owner?: Maybe<TokenOwner>;
  ownershipHistory: Array<TokenOwner>;
  pictureUrl?: Maybe<Scalars['String']>;
  privateMinPrice?: Maybe<Scalars['String']>;
  publicMinPrice?: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  tradeableStatus: Tradeable;
  walletStatus: WalletStatus;
};


export type TokenLatestOwnerArgs = {
  blockchain: Blockchain;
};


export type TokenPictureUrlArgs = {
  derivative?: InputMaybe<Scalars['String']>;
};

/** An auction in the Token service */
export type TokenAuction = Node & {
  __typename?: 'TokenAuction';
  bestBid?: Maybe<TokenBid>;
  /** The `bids` field cannot be nested within a list. */
  bids: TokenBidConnection;
  bidsCount: Scalars['Int'];
  blockchainId: Scalars['String'];
  creditCardFee: Scalars['Float'];
  /** Current price, in wei. */
  currentPrice: Scalars['String'];
  endDate: Scalars['ISO8601DateTime'];
  id: Scalars['ID'];
  /** Minimum next bid amount, in wei. */
  minNextBid: Scalars['String'];
  nfts: Array<Token>;
  open: Scalars['Boolean'];
  startDate: Scalars['ISO8601DateTime'];
};


/** An auction in the Token service */
export type TokenAuctionBidsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** The connection type for TokenAuction. */
export type TokenAuctionConnection = {
  __typename?: 'TokenAuctionConnection';
  /** A list of edges. */
  edges: Array<TokenAuctionEdge>;
  /** A list of nodes. */
  nodes: Array<TokenAuction>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

/** An edge in a connection. */
export type TokenAuctionEdge = {
  __typename?: 'TokenAuctionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<TokenAuction>;
};

/** Baseball token metadata */
export type TokenBaseballMetadata = Node & TokenCardMetadataInterface & {
  __typename?: 'TokenBaseballMetadata';
  id: Scalars['ID'];
  playerDisplayName: Scalars['String'];
  playerPositions: Array<Scalars['String']>;
  playerSlug: Scalars['String'];
  rarity: Rarity;
  seasonStartYear: Scalars['Int'];
  serialNumber: Scalars['Int'];
  singleCivilYear: Scalars['Boolean'];
  supply: Scalars['Int'];
  teamSlug: Scalars['String'];
};

/** A bid on an TokenAuction */
export type TokenBid = Node & {
  __typename?: 'TokenBid';
  /** Bid amount, in wei. */
  amount: Scalars['String'];
  amountInFiat: Fiat;
  auction: TokenAuction;
  bidder?: Maybe<BlockchainUser>;
  createdAt: Scalars['ISO8601DateTime'];
  id: Scalars['ID'];
};

/** The connection type for TokenBid. */
export type TokenBidConnection = {
  __typename?: 'TokenBidConnection';
  /** A list of edges. */
  edges: Array<TokenBidEdge>;
  /** A list of nodes. */
  nodes: Array<TokenBid>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

/** An edge in a connection. */
export type TokenBidEdge = {
  __typename?: 'TokenBidEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<TokenBid>;
};

/** Card token metadata */
export type TokenCardMetadataInterface = {
  playerDisplayName: Scalars['String'];
  playerSlug: Scalars['String'];
  rarity: Rarity;
  seasonStartYear: Scalars['Int'];
  serialNumber: Scalars['Int'];
  singleCivilYear: Scalars['Boolean'];
  supply: Scalars['Int'];
  teamSlug: Scalars['String'];
};

/** Offer or Auction */
export type TokenDeal = TokenAuction | TokenOffer;

/** Payload required to make a Starkware NFT deposit */
export type TokenDeposit = {
  __typename?: 'TokenDeposit';
  assetType: Scalars['String'];
  starkKey: Scalars['String'];
  tokenId: Scalars['String'];
  vaultId: Scalars['Int'];
};

/** Football token metadata */
export type TokenFootballMetadata = Node & TokenCardMetadataInterface & {
  __typename?: 'TokenFootballMetadata';
  id: Scalars['ID'];
  playerDisplayName: Scalars['String'];
  playerPosition: Scalars['String'];
  playerSlug: Scalars['String'];
  rarity: Rarity;
  seasonStartYear: Scalars['Int'];
  serialNumber: Scalars['Int'];
  singleCivilYear: Scalars['Boolean'];
  supply: Scalars['Int'];
  teamSlug: Scalars['String'];
};

/** Sport token metadata */
export type TokenMetadata = TokenBaseballMetadata | TokenFootballMetadata;

/** An offer in the Token service */
export type TokenOffer = Node & {
  __typename?: 'TokenOffer';
  acceptedAt?: Maybe<Scalars['ISO8601DateTime']>;
  actualReceiver?: Maybe<BlockchainUser>;
  blockchainId?: Maybe<Scalars['String']>;
  cancelledAt?: Maybe<Scalars['ISO8601DateTime']>;
  createdAt: Scalars['ISO8601DateTime'];
  creditCardFee: Scalars['Float'];
  endDate: Scalars['ISO8601DateTime'];
  id: Scalars['ID'];
  priceFiat: Fiat;
  priceWei: Scalars['String'];
  receiver?: Maybe<BlockchainUser>;
  receiverSide: TokenOfferSide;
  sender: BlockchainUser;
  senderSide: TokenOfferSide;
  startDate: Scalars['ISO8601DateTime'];
  status: Scalars['String'];
};

/** The connection type for TokenOffer. */
export type TokenOfferConnection = {
  __typename?: 'TokenOfferConnection';
  /** A list of edges. */
  edges: Array<TokenOfferEdge>;
  /** A list of nodes. */
  nodes: Array<TokenOffer>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

/** An edge in a connection. */
export type TokenOfferEdge = {
  __typename?: 'TokenOfferEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<TokenOffer>;
};

/** One side of an Offer */
export type TokenOfferSide = {
  __typename?: 'TokenOfferSide';
  fiat: Fiat;
  nfts: Array<Token>;
  wei: Scalars['String'];
};

export type TokenOwner = Node & {
  __typename?: 'TokenOwner';
  account?: Maybe<Account>;
  address: Scalars['String'];
  blockchain: Blockchain;
  deal?: Maybe<TokenDeal>;
  from: Scalars['ISO8601DateTime'];
  id: Scalars['ID'];
  optimistic: Scalars['Boolean'];
  priceFiat: Fiat;
  priceWei: Scalars['String'];
  /** @deprecated Use transfer_type and deal fields instead */
  referenceId?: Maybe<Scalars['String']>;
  token: Token;
  transferType: OwnerTransfer;
  user?: Maybe<User>;
};

/** The Tokens queries */
export type TokenRoot = {
  __typename?: 'TokenRoot';
  auction: TokenAuction;
  auctions: Array<TokenAuction>;
  nft: Token;
  nfts: Array<Token>;
  offer: TokenOffer;
  offers: Array<TokenOffer>;
};


/** The Tokens queries */
export type TokenRootAuctionArgs = {
  id: Scalars['String'];
};


/** The Tokens queries */
export type TokenRootAuctionsArgs = {
  ids: Array<Scalars['String']>;
};


/** The Tokens queries */
export type TokenRootNftArgs = {
  assetId: Scalars['String'];
};


/** The Tokens queries */
export type TokenRootNftsArgs = {
  assetIds: Array<Scalars['String']>;
};


/** The Tokens queries */
export type TokenRootOfferArgs = {
  id: Scalars['String'];
};


/** The Tokens queries */
export type TokenRootOffersArgs = {
  ids: Array<Scalars['String']>;
};

export enum Tradeable {
  /** The card should be deposited on Sorare before being traded */
  DepositRequired = 'DEPOSIT_REQUIRED',
  /**
   * The card is stored in the Sorare account
   * @deprecated Use WalletStatus instead
   */
  Internal = 'INTERNAL',
  /**
   * The card is stored in the mapped account
   * @deprecated Use WalletStatus instead
   */
  Mapped = 'MAPPED',
  /** The card is neither in the Sorare account nor in the mapped account */
  No = 'NO',
  /** The card has not yet been transferred */
  NotYet = 'NOT_YET',
  /**
   * The card is on sale
   * @deprecated Not needed anymore
   */
  OnSale = 'ON_SALE',
  /** The card has no owner or does not belong to the user */
  Undefined = 'UNDEFINED',
  /** The card is transferrable */
  Yes = 'YES'
}

export enum TransactionStatus {
  /** Transaction cancelled */
  Cancelled = 'CANCELLED',
  /** Transaction confirmed */
  Confirmed = 'CONFIRMED',
  /** Transaction dropped */
  Dropped = 'DROPPED',
  /** Transaction failed */
  Failed = 'FAILED',
  /** Transaction is currently minting */
  Pending = 'PENDING'
}

/** The Transfer Market queries */
export type TransferMarket = {
  __typename?: 'TransferMarket';
  banners: Array<TransferMarketBanner>;
  bundledAuction?: Maybe<BundledAuction>;
  bundledAuctionsWithCards: Array<BundledAuction>;
  bundlesFirst: Scalars['Boolean'];
  cardWeiMinPrice: Scalars['String'];
  englishAuction: BundledAuction;
  englishAuctions: EnglishAuctionConnection;
  featuredBundledAuctions: Array<BundledAuction>;
  id: Scalars['String'];
  offer: Offer;
  powerHourStartDate?: Maybe<Scalars['ISO8601DateTime']>;
  secondaryBanners: Array<TransferMarketBanner>;
  /** Last 500 SingleSaleOffer, sorted by `endDate` in descending order. */
  singleSaleOffers: SingleSaleOfferConnection;
};


/** The Transfer Market queries */
export type TransferMarketBundledAuctionArgs = {
  slug: Scalars['String'];
};


/** The Transfer Market queries */
export type TransferMarketBundledAuctionsWithCardsArgs = {
  slugs: Array<Scalars['String']>;
};


/** The Transfer Market queries */
export type TransferMarketEnglishAuctionArgs = {
  slug: Scalars['String'];
};


/** The Transfer Market queries */
export type TransferMarketEnglishAuctionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  bundled?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  playerSlugs?: InputMaybe<Array<Scalars['String']>>;
};


/** The Transfer Market queries */
export type TransferMarketFeaturedBundledAuctionsArgs = {
  size?: InputMaybe<Scalars['Int']>;
  window?: InputMaybe<Scalars['Int']>;
};


/** The Transfer Market queries */
export type TransferMarketOfferArgs = {
  id: Scalars['String'];
};


/** The Transfer Market queries */
export type TransferMarketSingleSaleOffersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** A transfer market banner */
export type TransferMarketBanner = Node & WithPictureInterface & {
  __typename?: 'TransferMarketBanner';
  background?: Maybe<Scalars['String']>;
  colorLeft?: Maybe<Scalars['String']>;
  colorRight?: Maybe<Scalars['String']>;
  href?: Maybe<Scalars['String']>;
  hrefLabel?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  pictureUrl?: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  subtitle?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  videoUrl?: Maybe<Scalars['String']>;
};


/** A transfer market banner */
export type TransferMarketBannerPictureUrlArgs = {
  derivative?: InputMaybe<Scalars['String']>;
};

/** Signable payload for a Starkware transfer request */
export type TransferRequest = {
  __typename?: 'TransferRequest';
  amount: Scalars['String'];
  condition?: Maybe<Scalars['String']>;
  expirationTimestamp: Scalars['Int'];
  feeInfoUser?: Maybe<Fee>;
  nonce: Scalars['Int'];
  receiverPublicKey: Scalars['String'];
  receiverVaultId: Scalars['Int'];
  senderVaultId: Scalars['Int'];
  token: Scalars['String'];
};

/** Autogenerated input type of UnblockEmail */
export type UnblockEmailInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
};

/** Autogenerated return type of UnblockEmail */
export type UnblockEmailPayload = {
  __typename?: 'UnblockEmailPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  currentUser?: Maybe<CurrentUser>;
  errors: Array<UserError>;
};

/** A Sorare user */
export type User = Node & PublicUserInfoInterface & {
  __typename?: 'User';
  allTimeBestDecksInFormation: Array<DeckInFormation>;
  awards: Array<UserAward>;
  baseballProfile?: Maybe<UserSportProfile>;
  /** The `bought_single_sale_offers` field cannot be nested within a list. */
  boughtSingleSaleOffers: SingleSaleOfferConnection;
  /** The `bought_single_sale_token_offers` field cannot be nested within a list. */
  boughtSingleSaleTokenOffers: TokenOfferConnection;
  /** The `buying_english_auctions` field cannot be nested within a list. */
  buyingEnglishAuctions: Array<EnglishAuction>;
  /** The `buying_token_auctions` field cannot be nested within a list. */
  buyingTokenAuctions: Array<TokenAuction>;
  cardCounts: CardCount;
  cardsCount: Scalars['Int'];
  createdAt: Scalars['ISO8601DateTime'];
  /** The `custom_decks` field cannot be nested within a list. */
  customDecks: CustomDeckConnection;
  /** The `ended_with_no_buyer_single_sale_offers` field cannot be nested within a list. */
  endedWithNoBuyerSingleSaleOffers: SingleSaleOfferConnection;
  /** The `ended_with_no_buyer_single_sale_token_offers` field cannot be nested within a list. */
  endedWithNoBuyerSingleSaleTokenOffers: TokenOfferConnection;
  /** The `english_auctions` field cannot be nested within a list. */
  englishAuctions: EnglishAuctionConnection;
  ethVaultId?: Maybe<Scalars['Int']>;
  ethereumAddress: Scalars['String'];
  followed?: Maybe<EmailSubscription>;
  /** The `followers` field cannot be nested within a list. */
  followers: UserWithSubscriptionSlugConnection;
  followersCount: Scalars['Int'];
  /** The `following` field cannot be nested within a list. */
  following: UserWithSubscriptionSlugConnection;
  followingCount: Scalars['Int'];
  footballProfile?: Maybe<UserSportProfile>;
  highlightedDeck?: Maybe<HighlightedDeck>;
  id: Scalars['ID'];
  /**
   * The `live_single_sale_offers` field cannot be nested within a list.
   * @deprecated Use the paginated version instead
   */
  liveSingleSaleOffers: Array<SingleSaleOffer>;
  /** The `live_single_sale_token_offers` field cannot be nested within a list. */
  liveSingleSaleTokenOffers: TokenOfferConnection;
  /** The `lost_english_auctions` field cannot be nested within a list. */
  lostEnglishAuctions: EnglishAuctionConnection;
  /** The `lost_token_auctions` field cannot be nested within a list. */
  lostTokenAuctions: TokenAuctionConnection;
  nickname: Scalars['String'];
  /** The `paginated_cards` field cannot be nested within a list. */
  paginatedCards: CardConnection;
  /** The `paginated_live_single_sale_offers` field cannot be nested within a list. */
  paginatedLiveSingleSaleOffers: SingleSaleOfferConnection;
  profile: UserProfile;
  /** The `single_sale_offers` field cannot be nested within a list. */
  singleSaleOffers: SingleSaleOfferConnection;
  /** The `single_sale_token_offers` field cannot be nested within a list. */
  singleSaleTokenOffers: TokenOfferConnection;
  slug: Scalars['String'];
  /** The `sold_single_sale_offers` field cannot be nested within a list. */
  soldSingleSaleOffers: SingleSaleOfferConnection;
  /** The `sold_single_sale_token_offers` field cannot be nested within a list. */
  soldSingleSaleTokenOffers: TokenOfferConnection;
  sorareAddress?: Maybe<Scalars['String']>;
  starkKey?: Maybe<Scalars['String']>;
  starkKeyRegistered: Scalars['Boolean'];
  /** The `token_auctions` field cannot be nested within a list. */
  tokenAuctions: TokenAuctionConnection;
  /** The `won_english_auctions` field cannot be nested within a list. */
  wonEnglishAuctions: EnglishAuctionConnection;
  /** The `won_token_auctions` field cannot be nested within a list. */
  wonTokenAuctions: TokenAuctionConnection;
};


/** A Sorare user */
export type UserBoughtSingleSaleOffersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortByEndDate?: InputMaybe<SortingOption>;
};


/** A Sorare user */
export type UserBoughtSingleSaleTokenOffersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortByEndDate?: InputMaybe<SortingOption>;
  sport?: InputMaybe<Array<Sport>>;
};


/** A Sorare user */
export type UserBuyingEnglishAuctionsArgs = {
  newlyListed?: InputMaybe<Scalars['Boolean']>;
};


/** A Sorare user */
export type UserBuyingTokenAuctionsArgs = {
  newlyListed?: InputMaybe<Scalars['Boolean']>;
  sport?: InputMaybe<Array<Sport>>;
};


/** A Sorare user */
export type UserCustomDecksArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** A Sorare user */
export type UserEndedWithNoBuyerSingleSaleOffersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortByEndDate?: InputMaybe<SortingOption>;
};


/** A Sorare user */
export type UserEndedWithNoBuyerSingleSaleTokenOffersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortByEndDate?: InputMaybe<SortingOption>;
  sport?: InputMaybe<Array<Sport>>;
};


/** A Sorare user */
export type UserEnglishAuctionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortByEndDate?: InputMaybe<SortingOption>;
};


/** A Sorare user */
export type UserFollowersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** A Sorare user */
export type UserFollowingArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** A Sorare user */
export type UserLiveSingleSaleOffersArgs = {
  newlyListed?: InputMaybe<Scalars['Boolean']>;
};


/** A Sorare user */
export type UserLiveSingleSaleTokenOffersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortByEndDate?: InputMaybe<SortingOption>;
  sport?: InputMaybe<Array<Sport>>;
};


/** A Sorare user */
export type UserLostEnglishAuctionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortByEndDate?: InputMaybe<SortingOption>;
};


/** A Sorare user */
export type UserLostTokenAuctionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortByEndDate?: InputMaybe<SortingOption>;
  sport?: InputMaybe<Array<Sport>>;
};


/** A Sorare user */
export type UserPaginatedCardsArgs = {
  after?: InputMaybe<Scalars['String']>;
  age?: InputMaybe<Scalars['Int']>;
  assetIds?: InputMaybe<Array<Scalars['String']>>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  owned?: InputMaybe<Scalars['Boolean']>;
  ownedSinceAfter?: InputMaybe<Scalars['ISO8601DateTime']>;
  positions?: InputMaybe<Array<Position>>;
  rarities?: InputMaybe<Array<Rarity>>;
  serialNumber?: InputMaybe<Scalars['Int']>;
  shirtNumber?: InputMaybe<Scalars['Int']>;
  slugs?: InputMaybe<Array<Scalars['String']>>;
};


/** A Sorare user */
export type UserPaginatedLiveSingleSaleOffersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortByEndDate?: InputMaybe<SortingOption>;
};


/** A Sorare user */
export type UserSingleSaleOffersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortByEndDate?: InputMaybe<SortingOption>;
};


/** A Sorare user */
export type UserSingleSaleTokenOffersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortByEndDate?: InputMaybe<SortingOption>;
  sport?: InputMaybe<Array<Sport>>;
};


/** A Sorare user */
export type UserSoldSingleSaleOffersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortByEndDate?: InputMaybe<SortingOption>;
};


/** A Sorare user */
export type UserSoldSingleSaleTokenOffersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortByEndDate?: InputMaybe<SortingOption>;
  sport?: InputMaybe<Array<Sport>>;
};


/** A Sorare user */
export type UserTokenAuctionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortByEndDate?: InputMaybe<SortingOption>;
  sport?: InputMaybe<Array<Sport>>;
};


/** A Sorare user */
export type UserWonEnglishAuctionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortByEndDate?: InputMaybe<SortingOption>;
};


/** A Sorare user */
export type UserWonTokenAuctionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortByEndDate?: InputMaybe<SortingOption>;
  sport?: InputMaybe<Array<Sport>>;
};

/** A user account entry */
export type UserAccountEntry = Node & {
  __typename?: 'UserAccountEntry';
  aasmState: UserAccountEntryState;
  amount: Scalars['String'];
  date: Scalars['ISO8601DateTime'];
  entryType: UserAccountEntryEntry;
  id: Scalars['ID'];
  operation?: Maybe<UserAccountEntryOperation>;
  provisional: Scalars['Boolean'];
  tokenOperation?: Maybe<UserAccountEntryTokenOperation>;
  user: User;
};

/** The connection type for UserAccountEntry. */
export type UserAccountEntryConnection = {
  __typename?: 'UserAccountEntryConnection';
  /** A list of edges. */
  edges: Array<UserAccountEntryEdge>;
  /** A list of nodes. */
  nodes: Array<UserAccountEntry>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type UserAccountEntryEdge = {
  __typename?: 'UserAccountEntryEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<UserAccountEntry>;
};

export enum UserAccountEntryEntry {
  Deposit = 'DEPOSIT',
  EthMigrationRounding = 'ETH_MIGRATION_ROUNDING',
  Payment = 'PAYMENT',
  Reward = 'REWARD',
  Withdrawal = 'WITHDRAWAL',
  WithdrawalFee = 'WITHDRAWAL_FEE'
}

/** Object that can be an operation of a UserAccountEntry */
export type UserAccountEntryOperation = Bid | EthMigration | FastWithdrawal | FullWithdrawalRequest | Offer | So5Reward | StarkwareWithdrawal | Withdrawal;

export enum UserAccountEntryState {
  Cancelled = 'CANCELLED',
  Confirmed = 'CONFIRMED',
  Pending = 'PENDING'
}

/** Object that can be an tokenOperation of a UserAccountEntry */
export type UserAccountEntryTokenOperation = EthMigration | FastWithdrawal | FullWithdrawalRequest | So5Reward | StarkwareWithdrawal | TokenBid | TokenOffer | Withdrawal;

/** A user award */
export type UserAward = Node & {
  __typename?: 'UserAward';
  award: Award;
  category: AwardCategory;
  claimableReward?: Maybe<Scalars['Int']>;
  claimedLevel?: Maybe<Scalars['Int']>;
  completed: Scalars['Boolean'];
  id: Scalars['ID'];
  level: Scalars['Int'];
  maxLevel: Scalars['Int'];
  nextLevel: Scalars['Int'];
  nextRequirement?: Maybe<Scalars['String']>;
  nextReward?: Maybe<Scalars['Int']>;
  progression?: Maybe<Scalars['String']>;
  slug: Scalars['String'];
};

/** A user notification regarding an Award event */
export type UserAwardNotification = Node & NotificationInterface & {
  __typename?: 'UserAwardNotification';
  amount?: Maybe<Scalars['Int']>;
  award: UserAward;
  createdAt: Scalars['ISO8601DateTime'];
  id: Scalars['ID'];
  level?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  read: Scalars['Boolean'];
  user: CurrentUser;
};

/** The connection type for User. */
export type UserConnection = {
  __typename?: 'UserConnection';
  /** A list of edges. */
  edges: Array<UserEdge>;
  /** A list of nodes. */
  nodes: Array<User>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type UserEdge = {
  __typename?: 'UserEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<User>;
};

/** A user-readable error */
export type UserError = {
  __typename?: 'UserError';
  /** The error code */
  code?: Maybe<Scalars['Int']>;
  /** A description of the error */
  message: Scalars['String'];
  /** Which input value this error came from */
  path?: Maybe<Array<Scalars['String']>>;
};

/** A user lifecycle entry */
export type UserLifecycleInput = {
  name: Scalars['String'];
  value: Scalars['Json'];
};

/** User Offer Interface */
export type UserOffersInterface = {
  blockedUntil?: Maybe<Scalars['ISO8601DateTime']>;
  blockedUsers: UserConnection;
  directOffers: OfferConnection;
  endedDirectOffersReceived: OfferConnection;
  endedDirectOffersSent: OfferConnection;
  endedTokenOffersReceived: TokenOfferConnection;
  endedTokenOffersSent: TokenOfferConnection;
  pendingDirectOffersReceived: OfferConnection;
  pendingDirectOffersSent: OfferConnection;
  pendingTokenOffersReceived: TokenOfferConnection;
  pendingTokenOffersSent: TokenOfferConnection;
  tokenOffers: TokenOfferConnection;
};


/** User Offer Interface */
export type UserOffersInterfaceBlockedUsersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** User Offer Interface */
export type UserOffersInterfaceDirectOffersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  direction: OfferDirection;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortType?: InputMaybe<SortingOption>;
};


/** User Offer Interface */
export type UserOffersInterfaceEndedDirectOffersReceivedArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortType?: InputMaybe<SortingOption>;
};


/** User Offer Interface */
export type UserOffersInterfaceEndedDirectOffersSentArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortType?: InputMaybe<SortingOption>;
};


/** User Offer Interface */
export type UserOffersInterfaceEndedTokenOffersReceivedArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortType?: InputMaybe<SortingOption>;
  sport?: InputMaybe<Array<Sport>>;
};


/** User Offer Interface */
export type UserOffersInterfaceEndedTokenOffersSentArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortType?: InputMaybe<SortingOption>;
  sport?: InputMaybe<Array<Sport>>;
};


/** User Offer Interface */
export type UserOffersInterfacePendingDirectOffersReceivedArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortType?: InputMaybe<SortingOption>;
};


/** User Offer Interface */
export type UserOffersInterfacePendingDirectOffersSentArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortType?: InputMaybe<SortingOption>;
};


/** User Offer Interface */
export type UserOffersInterfacePendingTokenOffersReceivedArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortType?: InputMaybe<SortingOption>;
  sport?: InputMaybe<Array<Sport>>;
};


/** User Offer Interface */
export type UserOffersInterfacePendingTokenOffersSentArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortType?: InputMaybe<SortingOption>;
  sport?: InputMaybe<Array<Sport>>;
};


/** User Offer Interface */
export type UserOffersInterfaceTokenOffersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  direction: OfferDirection;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortType?: InputMaybe<SortingOption>;
  sport?: InputMaybe<Array<Sport>>;
};

/** An object representing the past or present ownership of a card by a user */
export type UserOwner = OwnerInterface & {
  __typename?: 'UserOwner';
  account?: Maybe<Account>;
  address: Scalars['String'];
  blockchain: Scalars['String'];
  card: Card;
  /**
   * The deal id that created this owner in case it comes from an offer
   * @deprecated no longer maintained
   */
  dealId?: Maybe<Scalars['String']>;
  from: Scalars['ISO8601DateTime'];
  id: Scalars['ID'];
  /** @deprecated use account.accountable.migratorApproved */
  migratorApproval: Scalars['Boolean'];
  /** @deprecated use id */
  newId?: Maybe<Scalars['String']>;
  optimistic: Scalars['Boolean'];
  ownerable: User;
  /** Card price, in wei. */
  price: Scalars['String'];
  referenceId?: Maybe<Scalars['String']>;
  transferType: Scalars['String'];
  /** @deprecated no longer maintained */
  userNonce?: Maybe<Scalars['Int']>;
};

/** An owner with conversion rates */
export type UserOwnerWithRates = OwnerInterface & {
  __typename?: 'UserOwnerWithRates';
  account?: Maybe<Account>;
  address: Scalars['String'];
  blockchain: Scalars['String'];
  card: Card;
  /**
   * The deal id that created this owner in case it comes from an offer
   * @deprecated no longer maintained
   */
  dealId?: Maybe<Scalars['String']>;
  from: Scalars['ISO8601DateTime'];
  id: Scalars['ID'];
  /** @deprecated use account.accountable.migratorApproved */
  migratorApproval: Scalars['Boolean'];
  /** @deprecated use id */
  newId?: Maybe<Scalars['String']>;
  optimistic: Scalars['Boolean'];
  ownerable: User;
  /** Card price, in wei. */
  price: Scalars['String'];
  priceInFiat: Fiat;
  referenceId?: Maybe<Scalars['String']>;
  transferType: Scalars['String'];
  /** @deprecated no longer maintained */
  userNonce?: Maybe<Scalars['Int']>;
};

/** A Sorare user profile */
export type UserProfile = Node & WithPictureInterface & {
  __typename?: 'UserProfile';
  clubBanner?: Maybe<Skin>;
  clubName: Scalars['String'];
  clubShield?: Maybe<Skin>;
  discordUsername?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  pictureUrl?: Maybe<Scalars['String']>;
  /**
   * The date the user created his first non rookie / training lineup
   * @deprecated Pro concept is no longer being used
   */
  proSince?: Maybe<Scalars['ISO8601DateTime']>;
  /** @deprecated Rookie concept is no longer being used */
  rookie: Scalars['Boolean'];
  status?: Maybe<Scalars['String']>;
  twitterUsername?: Maybe<Scalars['String']>;
  user: User;
  verified: Scalars['Boolean'];
};


/** A Sorare user profile */
export type UserProfilePictureUrlArgs = {
  derivative?: InputMaybe<Scalars['String']>;
};

/** A Sorare user settings */
export type UserSettings = {
  __typename?: 'UserSettings';
  currency?: Maybe<Currency>;
  disableAllEmails: Scalars['Boolean'];
  fiatCurrency?: Maybe<FiatCurrency>;
  hideBalance: Scalars['Boolean'];
  id: Scalars['ID'];
  lastTcuVersionAccepted: Scalars['Boolean'];
  lifecycle: Scalars['Json'];
  locale?: Maybe<Scalars['String']>;
  notificationPreferences: Array<NotificationPreference>;
};

/** User social connections */
export type UserSocialInterface = {
  followed?: Maybe<EmailSubscription>;
  /** The `followers` field cannot be nested within a list. */
  followers: UserWithSubscriptionSlugConnection;
  followersCount: Scalars['Int'];
  /** The `following` field cannot be nested within a list. */
  following: UserWithSubscriptionSlugConnection;
  followingCount: Scalars['Int'];
};


/** User social connections */
export type UserSocialInterfaceFollowersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** User social connections */
export type UserSocialInterfaceFollowingArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** An affiliate */
export type UserSource = Node & {
  __typename?: 'UserSource';
  id: Scalars['ID'];
  name: Scalars['String'];
};

/** A Sorare user sport specific profile */
export type UserSportProfile = Node & {
  __typename?: 'UserSportProfile';
  id: Scalars['ID'];
  onboarded: Scalars['Boolean'];
  onboardingStatus: UserSportProfileOnboardingStatus;
  sport: Sport;
};

export enum UserSportProfileOnboardingStatus {
  Completed = 'COMPLETED',
  None = 'NONE',
  Started = 'STARTED'
}

/** A Sorare user with the subscription slug of the current user */
export type UserWithSubscriptionSlug = PublicUserInfoInterface & UserSocialInterface & {
  __typename?: 'UserWithSubscriptionSlug';
  allTimeBestDecksInFormation: Array<DeckInFormation>;
  awards: Array<UserAward>;
  baseballProfile?: Maybe<UserSportProfile>;
  /** The `bought_single_sale_offers` field cannot be nested within a list. */
  boughtSingleSaleOffers: SingleSaleOfferConnection;
  /** The `bought_single_sale_token_offers` field cannot be nested within a list. */
  boughtSingleSaleTokenOffers: TokenOfferConnection;
  /** The `buying_english_auctions` field cannot be nested within a list. */
  buyingEnglishAuctions: Array<EnglishAuction>;
  /** The `buying_token_auctions` field cannot be nested within a list. */
  buyingTokenAuctions: Array<TokenAuction>;
  cardCounts: CardCount;
  cardsCount: Scalars['Int'];
  createdAt: Scalars['ISO8601DateTime'];
  /** The `custom_decks` field cannot be nested within a list. */
  customDecks: CustomDeckConnection;
  /** The `ended_with_no_buyer_single_sale_offers` field cannot be nested within a list. */
  endedWithNoBuyerSingleSaleOffers: SingleSaleOfferConnection;
  /** The `ended_with_no_buyer_single_sale_token_offers` field cannot be nested within a list. */
  endedWithNoBuyerSingleSaleTokenOffers: TokenOfferConnection;
  /** The `english_auctions` field cannot be nested within a list. */
  englishAuctions: EnglishAuctionConnection;
  ethVaultId?: Maybe<Scalars['Int']>;
  ethereumAddress: Scalars['String'];
  followed?: Maybe<EmailSubscription>;
  /** The `followers` field cannot be nested within a list. */
  followers: UserWithSubscriptionSlugConnection;
  followersCount: Scalars['Int'];
  /** The `following` field cannot be nested within a list. */
  following: UserWithSubscriptionSlugConnection;
  followingCount: Scalars['Int'];
  footballProfile?: Maybe<UserSportProfile>;
  highlightedDeck?: Maybe<HighlightedDeck>;
  id: Scalars['ID'];
  /**
   * The `live_single_sale_offers` field cannot be nested within a list.
   * @deprecated Use the paginated version instead
   */
  liveSingleSaleOffers: Array<SingleSaleOffer>;
  /** The `live_single_sale_token_offers` field cannot be nested within a list. */
  liveSingleSaleTokenOffers: TokenOfferConnection;
  /** The `lost_english_auctions` field cannot be nested within a list. */
  lostEnglishAuctions: EnglishAuctionConnection;
  /** The `lost_token_auctions` field cannot be nested within a list. */
  lostTokenAuctions: TokenAuctionConnection;
  nickname: Scalars['String'];
  /** The `paginated_cards` field cannot be nested within a list. */
  paginatedCards: CardConnection;
  /** The `paginated_live_single_sale_offers` field cannot be nested within a list. */
  paginatedLiveSingleSaleOffers: SingleSaleOfferConnection;
  profile: UserProfile;
  /** The `single_sale_offers` field cannot be nested within a list. */
  singleSaleOffers: SingleSaleOfferConnection;
  /** The `single_sale_token_offers` field cannot be nested within a list. */
  singleSaleTokenOffers: TokenOfferConnection;
  slug: Scalars['String'];
  /** The `sold_single_sale_offers` field cannot be nested within a list. */
  soldSingleSaleOffers: SingleSaleOfferConnection;
  /** The `sold_single_sale_token_offers` field cannot be nested within a list. */
  soldSingleSaleTokenOffers: TokenOfferConnection;
  sorareAddress?: Maybe<Scalars['String']>;
  starkKey?: Maybe<Scalars['String']>;
  starkKeyRegistered: Scalars['Boolean'];
  subscriptionSlug?: Maybe<Scalars['String']>;
  /** The `token_auctions` field cannot be nested within a list. */
  tokenAuctions: TokenAuctionConnection;
  /** The `won_english_auctions` field cannot be nested within a list. */
  wonEnglishAuctions: EnglishAuctionConnection;
  /** The `won_token_auctions` field cannot be nested within a list. */
  wonTokenAuctions: TokenAuctionConnection;
};


/** A Sorare user with the subscription slug of the current user */
export type UserWithSubscriptionSlugBoughtSingleSaleOffersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortByEndDate?: InputMaybe<SortingOption>;
};


/** A Sorare user with the subscription slug of the current user */
export type UserWithSubscriptionSlugBoughtSingleSaleTokenOffersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortByEndDate?: InputMaybe<SortingOption>;
  sport?: InputMaybe<Array<Sport>>;
};


/** A Sorare user with the subscription slug of the current user */
export type UserWithSubscriptionSlugBuyingEnglishAuctionsArgs = {
  newlyListed?: InputMaybe<Scalars['Boolean']>;
};


/** A Sorare user with the subscription slug of the current user */
export type UserWithSubscriptionSlugBuyingTokenAuctionsArgs = {
  newlyListed?: InputMaybe<Scalars['Boolean']>;
  sport?: InputMaybe<Array<Sport>>;
};


/** A Sorare user with the subscription slug of the current user */
export type UserWithSubscriptionSlugCustomDecksArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** A Sorare user with the subscription slug of the current user */
export type UserWithSubscriptionSlugEndedWithNoBuyerSingleSaleOffersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortByEndDate?: InputMaybe<SortingOption>;
};


/** A Sorare user with the subscription slug of the current user */
export type UserWithSubscriptionSlugEndedWithNoBuyerSingleSaleTokenOffersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortByEndDate?: InputMaybe<SortingOption>;
  sport?: InputMaybe<Array<Sport>>;
};


/** A Sorare user with the subscription slug of the current user */
export type UserWithSubscriptionSlugEnglishAuctionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortByEndDate?: InputMaybe<SortingOption>;
};


/** A Sorare user with the subscription slug of the current user */
export type UserWithSubscriptionSlugFollowersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** A Sorare user with the subscription slug of the current user */
export type UserWithSubscriptionSlugFollowingArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** A Sorare user with the subscription slug of the current user */
export type UserWithSubscriptionSlugLiveSingleSaleOffersArgs = {
  newlyListed?: InputMaybe<Scalars['Boolean']>;
};


/** A Sorare user with the subscription slug of the current user */
export type UserWithSubscriptionSlugLiveSingleSaleTokenOffersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortByEndDate?: InputMaybe<SortingOption>;
  sport?: InputMaybe<Array<Sport>>;
};


/** A Sorare user with the subscription slug of the current user */
export type UserWithSubscriptionSlugLostEnglishAuctionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortByEndDate?: InputMaybe<SortingOption>;
};


/** A Sorare user with the subscription slug of the current user */
export type UserWithSubscriptionSlugLostTokenAuctionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortByEndDate?: InputMaybe<SortingOption>;
  sport?: InputMaybe<Array<Sport>>;
};


/** A Sorare user with the subscription slug of the current user */
export type UserWithSubscriptionSlugPaginatedCardsArgs = {
  after?: InputMaybe<Scalars['String']>;
  age?: InputMaybe<Scalars['Int']>;
  assetIds?: InputMaybe<Array<Scalars['String']>>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  owned?: InputMaybe<Scalars['Boolean']>;
  ownedSinceAfter?: InputMaybe<Scalars['ISO8601DateTime']>;
  positions?: InputMaybe<Array<Position>>;
  rarities?: InputMaybe<Array<Rarity>>;
  serialNumber?: InputMaybe<Scalars['Int']>;
  shirtNumber?: InputMaybe<Scalars['Int']>;
  slugs?: InputMaybe<Array<Scalars['String']>>;
};


/** A Sorare user with the subscription slug of the current user */
export type UserWithSubscriptionSlugPaginatedLiveSingleSaleOffersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortByEndDate?: InputMaybe<SortingOption>;
};


/** A Sorare user with the subscription slug of the current user */
export type UserWithSubscriptionSlugSingleSaleOffersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortByEndDate?: InputMaybe<SortingOption>;
};


/** A Sorare user with the subscription slug of the current user */
export type UserWithSubscriptionSlugSingleSaleTokenOffersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortByEndDate?: InputMaybe<SortingOption>;
  sport?: InputMaybe<Array<Sport>>;
};


/** A Sorare user with the subscription slug of the current user */
export type UserWithSubscriptionSlugSoldSingleSaleOffersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortByEndDate?: InputMaybe<SortingOption>;
};


/** A Sorare user with the subscription slug of the current user */
export type UserWithSubscriptionSlugSoldSingleSaleTokenOffersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortByEndDate?: InputMaybe<SortingOption>;
  sport?: InputMaybe<Array<Sport>>;
};


/** A Sorare user with the subscription slug of the current user */
export type UserWithSubscriptionSlugTokenAuctionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortByEndDate?: InputMaybe<SortingOption>;
  sport?: InputMaybe<Array<Sport>>;
};


/** A Sorare user with the subscription slug of the current user */
export type UserWithSubscriptionSlugWonEnglishAuctionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortByEndDate?: InputMaybe<SortingOption>;
};


/** A Sorare user with the subscription slug of the current user */
export type UserWithSubscriptionSlugWonTokenAuctionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortByEndDate?: InputMaybe<SortingOption>;
  sport?: InputMaybe<Array<Sport>>;
};

/** The connection type for UserWithSubscriptionSlug. */
export type UserWithSubscriptionSlugConnection = {
  __typename?: 'UserWithSubscriptionSlugConnection';
  /** A list of edges. */
  edges: Array<UserWithSubscriptionSlugEdge>;
  /** A list of nodes. */
  nodes: Array<UserWithSubscriptionSlug>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type UserWithSubscriptionSlugEdge = {
  __typename?: 'UserWithSubscriptionSlugEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<UserWithSubscriptionSlug>;
};

/** Utm params */
export type UtmInput = {
  utmCampaign?: InputMaybe<Scalars['String']>;
  utmContent?: InputMaybe<Scalars['String']>;
  utmMedium?: InputMaybe<Scalars['String']>;
  utmSource?: InputMaybe<Scalars['String']>;
  utmTerm?: InputMaybe<Scalars['String']>;
};

/** A boolean value and its reason */
export type Validity = {
  __typename?: 'Validity';
  reason?: Maybe<Scalars['String']>;
  value: Scalars['Boolean'];
};

export type ValueBoundaries = {
  __typename?: 'ValueBoundaries';
  max: Scalars['Int'];
  min: Scalars['Int'];
};

export type ValueOpenBoundaries = {
  __typename?: 'ValueOpenBoundaries';
  max?: Maybe<Scalars['Int']>;
  min?: Maybe<Scalars['Int']>;
};

export enum WalletStatus {
  /** The card is stored in the Sorare account */
  Internal = 'INTERNAL',
  /** The card is stored in the mapped account */
  Mapped = 'MAPPED',
  /** The card has no owner or does not belong to the user */
  Unknown = 'UNKNOWN'
}

/** Fast withdrawal */
export type WithFastWithdrawal = {
  /** Get a starkware conditional transfer request for a fast withdrawal */
  fastWithdrawal: FastWithdrawal;
};


/** Fast withdrawal */
export type WithFastWithdrawalFastWithdrawalArgs = {
  amount: Scalars['String'];
  to: Scalars['String'];
};

/** Favorites */
export type WithFavoriteInterface = {
  favoriteCards: Array<Card>;
  /** @deprecated Use `my_subscriptions` instead */
  favoriteClubs: Array<Club>;
  favoritePlayers: Array<Player>;
  mySubscriptions: EmailSubscriptionConnection;
};


/** Favorites */
export type WithFavoriteInterfaceMySubscriptionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortType?: InputMaybe<SortingOption>;
  types?: InputMaybe<Array<SubscribableType>>;
};

/** Objects with memberships */
export type WithMemberships = {
  activeClubMembership?: Maybe<Membership>;
  appearances: Scalars['Int'];
  beforeLastOwningMembership?: Maybe<Membership>;
  clubMemberships: Array<Membership>;
  memberships: Array<Membership>;
};

/** Notifications */
export type WithNotifications = {
  notifications: NotificationConnection;
  /** Get notifications fields. */
  notificationsDetails: Notifications;
  unreadNotificationsCount: Scalars['Int'];
};


/** Notifications */
export type WithNotificationsNotificationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  categories?: InputMaybe<Array<NotificationCategoryInput>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** Notifications */
export type WithNotificationsNotificationsDetailsArgs = {
  categories?: InputMaybe<Array<NotificationCategoryInput>>;
};

/** Objects with a picture with derivatives */
export type WithPictureInterface = {
  pictureUrl?: Maybe<Scalars['String']>;
};


/** Objects with a picture with derivatives */
export type WithPictureInterfacePictureUrlArgs = {
  derivative?: InputMaybe<Scalars['String']>;
};

/** Objects with publicly accessible cards */
export type WithPublicCardsInterface = {
  /** The `cards` field cannot be nested within a list. */
  cards: CardConnection;
};


/** Objects with publicly accessible cards */
export type WithPublicCardsInterfaceCardsArgs = {
  after?: InputMaybe<Scalars['String']>;
  age?: InputMaybe<Scalars['Int']>;
  assetIds?: InputMaybe<Array<Scalars['String']>>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  owned?: InputMaybe<Scalars['Boolean']>;
  positions?: InputMaybe<Array<Position>>;
  rarities?: InputMaybe<Array<Rarity>>;
  serialNumber?: InputMaybe<Scalars['Int']>;
  shirtNumber?: InputMaybe<Scalars['Int']>;
  slugs?: InputMaybe<Array<Scalars['String']>>;
};

/** With Referral Interface */
export type WithReferralsInterface = {
  referee: Scalars['Boolean'];
  refereeReward?: Maybe<ReferralReward>;
  referralAsReferee?: Maybe<Referral>;
  referralRewardsCount: Scalars['Int'];
  /** Get the list of referrals */
  referrals: ReferralPaginated;
  referrer?: Maybe<User>;
  unclaimedReferralRewardsCount: Scalars['Int'];
};


/** With Referral Interface */
export type WithReferralsInterfaceReferralsArgs = {
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  state?: InputMaybe<ReferralState>;
};

export type WithSubscriptionsInterface = {
  currentUserSubscription?: Maybe<EmailSubscription>;
  slug: Scalars['String'];
  subscriptionsCount: Scalars['Int'];
};

/** A withdrawal */
export type Withdrawal = Node & {
  __typename?: 'Withdrawal';
  agreedFeeAmount: Scalars['String'];
  amount: Scalars['String'];
  createdAt: Scalars['ISO8601DateTime'];
  id: Scalars['ID'];
  status: WithdrawalStatus;
  to: Scalars['String'];
  transactionHash?: Maybe<Scalars['String']>;
};

export enum WithdrawalStatus {
  /** Withdrawal was cancelled */
  Cancelled = 'CANCELLED',
  /** Withdrawal is confirmed */
  Confirmed = 'CONFIRMED',
  /** Withdrawal is created and should be confirmed */
  Created = 'CREATED',
  /** Withdrawal has settled on the blockchain */
  Settled = 'SETTLED',
  /** Withdrawal has failed */
  SettlementFailed = 'SETTLEMENT_FAILED',
  /** Withdrawal has been published on the blockchain */
  SettlementPublished = 'SETTLEMENT_PUBLISHED'
}

/** A withdrawal with conversion rates */
export type WithdrawalWithRates = Node & {
  __typename?: 'WithdrawalWithRates';
  agreedFeeAmount: Scalars['String'];
  amount: Scalars['String'];
  amountInFiat: Fiat;
  createdAt: Scalars['ISO8601DateTime'];
  id: Scalars['ID'];
  status: WithdrawalStatus;
  to: Scalars['String'];
  transactionHash?: Maybe<Scalars['String']>;
};

/** Autogenerated input type of acceptOffer */
export type AcceptOfferInput = {
  blockchainId: Scalars['String'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  migrationData?: InputMaybe<OfferMigrationInput>;
  /** List of signed LimitOrder objects. */
  starkSignatures: Array<StarkSignatureInput>;
};

/** Autogenerated return type of acceptOffer */
export type AcceptOfferPayload = {
  __typename?: 'acceptOfferPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  errors: Array<UserError>;
  offer?: Maybe<Offer>;
  /** The sport-agnostic offer */
  tokenOffer?: Maybe<TokenOffer>;
};

/** Autogenerated input type of acceptTerms */
export type AcceptTermsInput = {
  acceptGameRules: Scalars['Boolean'];
  acceptPrivacyPolicy: Scalars['Boolean'];
  acceptTerms: Scalars['Boolean'];
  agreedToReceiveOffersFromPartners?: InputMaybe<Scalars['Boolean']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  tcuToken?: InputMaybe<Scalars['String']>;
};

/** Autogenerated return type of acceptTerms */
export type AcceptTermsPayload = {
  __typename?: 'acceptTermsPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  currentUser?: Maybe<CurrentUser>;
  errors: Array<UserError>;
  result: Scalars['String'];
};

/** Autogenerated input type of addCardsToDeck */
export type AddCardsToDeckInput = {
  cardSlugs: Array<Scalars['String']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  deckSlug: Scalars['String'];
};

/** Autogenerated return type of addCardsToDeck */
export type AddCardsToDeckPayload = {
  __typename?: 'addCardsToDeckPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  currentUser?: Maybe<CurrentUser>;
  deck?: Maybe<DeckInterface>;
  errors: Array<UserError>;
};

/** Autogenerated input type of addEmailToList */
export type AddEmailToListInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  name: Scalars['String'];
  utmParams?: InputMaybe<UtmInput>;
};

/** Autogenerated return type of addEmailToList */
export type AddEmailToListPayload = {
  __typename?: 'addEmailToListPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  errors: Array<UserError>;
};

/** Autogenerated input type of addFavouriteClubs */
export type AddFavouriteClubsInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  subscribables: Array<SubscribableInput>;
};

/** Autogenerated return type of addFavouriteClubs */
export type AddFavouriteClubsPayload = {
  __typename?: 'addFavouriteClubsPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  currentUser?: Maybe<CurrentUser>;
  errors: Array<UserError>;
};

/** Autogenerated input type of approveMigrator */
export type ApproveMigratorInput = {
  address: Scalars['String'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  nonce: Scalars['Int'];
  signature: Scalars['String'];
};

/** Autogenerated return type of approveMigrator */
export type ApproveMigratorPayload = {
  __typename?: 'approveMigratorPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  errors: Array<UserError>;
};

/** Autogenerated input type of bid */
export type BidInput = {
  /** Bid amount, in wei. */
  amount: Scalars['String'];
  auctionId: Scalars['ID'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** List of signed LimitOrder objects. */
  starkSignatures: Array<StarkSignatureInput>;
};

/** Autogenerated return type of bid */
export type BidPayload = {
  __typename?: 'bidPayload';
  bid?: Maybe<Bid>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  currentUser?: Maybe<CurrentUser>;
  errors: Array<UserError>;
  /** The sport-agnostic bid */
  tokenBid?: Maybe<TokenBid>;
};

/** Autogenerated input type of blockUserOffers */
export type BlockUserOffersInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  userSlug: Scalars['String'];
};

/** Autogenerated return type of blockUserOffers */
export type BlockUserOffersPayload = {
  __typename?: 'blockUserOffersPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  currentUser?: Maybe<CurrentUser>;
};

/** Autogenerated input type of buySkin */
export type BuySkinInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  skinId: Scalars['ID'];
};

/** Autogenerated return type of buySkin */
export type BuySkinPayload = {
  __typename?: 'buySkinPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  currentUser?: Maybe<CurrentUser>;
  errors: Array<UserError>;
  skin?: Maybe<Skin>;
};

/** Autogenerated input type of cancelEthBankWithdrawals */
export type CancelEthBankWithdrawalsInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
};

/** Autogenerated return type of cancelEthBankWithdrawals */
export type CancelEthBankWithdrawalsPayload = {
  __typename?: 'cancelEthBankWithdrawalsPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  currentUser?: Maybe<CurrentUser>;
  errors: Array<UserError>;
};

/** Autogenerated input type of cancelFastWithdrawal */
export type CancelFastWithdrawalInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  fastWithdrawalId: Scalars['ID'];
};

/** Autogenerated return type of cancelFastWithdrawal */
export type CancelFastWithdrawalPayload = {
  __typename?: 'cancelFastWithdrawalPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  currentUser?: Maybe<CurrentUser>;
  errors: Array<UserError>;
  fastWithdrawal?: Maybe<FastWithdrawal>;
};

/** Autogenerated input type of cancelOffer */
export type CancelOfferInput = {
  blockchainId: Scalars['String'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
};

/** Autogenerated return type of cancelOffer */
export type CancelOfferPayload = {
  __typename?: 'cancelOfferPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  errors: Array<UserError>;
  offer?: Maybe<Offer>;
  /** The sport-agnostic offer */
  tokenOffer?: Maybe<TokenOffer>;
};

/** Autogenerated input type of cancelWithdrawal */
export type CancelWithdrawalInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  withdrawalId: Scalars['ID'];
};

/** Autogenerated return type of cancelWithdrawal */
export type CancelWithdrawalPayload = {
  __typename?: 'cancelWithdrawalPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  currentUser?: Maybe<CurrentUser>;
  errors: Array<UserError>;
  withdrawal?: Maybe<Withdrawal>;
};

/** Autogenerated input type of checkPhoneNumberVerificationCode */
export type CheckPhoneNumberVerificationCodeInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  code: Scalars['String'];
};

/** Autogenerated return type of checkPhoneNumberVerificationCode */
export type CheckPhoneNumberVerificationCodePayload = {
  __typename?: 'checkPhoneNumberVerificationCodePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  currentUser?: Maybe<CurrentUser>;
  errors: Array<UserError>;
};

/** Autogenerated input type of claimAward */
export type ClaimAwardInput = {
  award: Award;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
};

/** Autogenerated return type of claimAward */
export type ClaimAwardPayload = {
  __typename?: 'claimAwardPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  currentUser?: Maybe<CurrentUser>;
  errors: Array<UserError>;
};

/** Autogenerated input type of claimCardDrop */
export type ClaimCardDropInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  task: OnboardingTaskEnum;
};

/** Autogenerated return type of claimCardDrop */
export type ClaimCardDropPayload = {
  __typename?: 'claimCardDropPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  currentUser?: Maybe<CurrentUser>;
  errors: Array<UserError>;
};

/** Autogenerated input type of claimReferralReward */
export type ClaimReferralRewardInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  referralRewardId: Scalars['ID'];
};

/** Autogenerated return type of claimReferralReward */
export type ClaimReferralRewardPayload = {
  __typename?: 'claimReferralRewardPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  currentUser?: Maybe<CurrentUser>;
  errors: Array<UserError>;
  referralReward?: Maybe<ReferralReward>;
};

/** Autogenerated input type of claimReward */
export type ClaimRewardInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  so5RewardId: Scalars['ID'];
};

/** Autogenerated return type of claimReward */
export type ClaimRewardPayload = {
  __typename?: 'claimRewardPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  currentUser?: Maybe<CurrentUser>;
  errors: Array<UserError>;
  so5Reward?: Maybe<So5Reward>;
};

/** Autogenerated input type of completeOnboardingTask */
export type CompleteOnboardingTaskInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  task: OnboardingTaskEnum;
};

/** Autogenerated return type of completeOnboardingTask */
export type CompleteOnboardingTaskPayload = {
  __typename?: 'completeOnboardingTaskPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  currentUser?: Maybe<CurrentUser>;
  errors: Array<UserError>;
};

/** Autogenerated input type of confirmEmail */
export type ConfirmEmailInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  token: Scalars['String'];
};

/** Autogenerated return type of confirmEmail */
export type ConfirmEmailPayload = {
  __typename?: 'confirmEmailPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  currentUser?: Maybe<CurrentUser>;
  errors: Array<UserError>;
};

/** Autogenerated input type of confirmSo5Lineups */
export type ConfirmSo5LineupsInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  so5LineupIds: Array<Scalars['ID']>;
};

/** Autogenerated return type of confirmSo5Lineups */
export type ConfirmSo5LineupsPayload = {
  __typename?: 'confirmSo5LineupsPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  errors: Array<UserError>;
  so5Lineups: Array<So5Lineup>;
};

/** Autogenerated input type of createCardWithdrawal */
export type CreateCardWithdrawalInput = {
  cardSlug: Scalars['String'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  destination: Scalars['String'];
  /** List of signed LimitOrder objects. */
  starkSignatures: Array<StarkSignatureInput>;
};

/** Autogenerated return type of createCardWithdrawal */
export type CreateCardWithdrawalPayload = {
  __typename?: 'createCardWithdrawalPayload';
  card?: Maybe<Card>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  errors: Array<UserError>;
};

/** Autogenerated input type of createCustomDeck */
export type CreateCustomDeckInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  visible: Scalars['Boolean'];
};

/** Autogenerated return type of createCustomDeck */
export type CreateCustomDeckPayload = {
  __typename?: 'createCustomDeckPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  currentUser?: Maybe<CurrentUser>;
  deck?: Maybe<CustomDeck>;
  errors: Array<UserError>;
};

/** Autogenerated input type of createDirectOffer */
export type CreateDirectOfferInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** ID used as unique deal identifier. Consider using `crypto.getRandomValues(new Uint32Array(4)).join()` to generate one. */
  dealId: Scalars['String'];
  /** Number of seconds this offer should be valid */
  duration?: InputMaybe<Scalars['Int']>;
  migrationData?: InputMaybe<OfferMigrationInput>;
  receiveAssetIds?: InputMaybe<Array<Scalars['String']>>;
  receiveCardsSlugs?: InputMaybe<Array<Scalars['String']>>;
  receiverSlug: Scalars['String'];
  sendAssetIds?: InputMaybe<Array<Scalars['String']>>;
  sendCardsSlugs?: InputMaybe<Array<Scalars['String']>>;
  sendWeiAmount: Scalars['WeiAmount'];
  /** List of signed LimitOrder objects. */
  starkSignatures: Array<StarkSignatureInput>;
};

/** Autogenerated return type of createDirectOffer */
export type CreateDirectOfferPayload = {
  __typename?: 'createDirectOfferPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  currentUser?: Maybe<CurrentUser>;
  errors: Array<UserError>;
  offer?: Maybe<Offer>;
  /** The sport-agnostic offer */
  tokenOffer?: Maybe<TokenOffer>;
};

/** Autogenerated input type of createEthBankWithdrawalIntent */
export type CreateEthBankWithdrawalIntentInput = {
  amount: Scalars['String'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
};

/** Autogenerated return type of createEthBankWithdrawalIntent */
export type CreateEthBankWithdrawalIntentPayload = {
  __typename?: 'createEthBankWithdrawalIntentPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  errors: Array<UserError>;
  ethBankWithdrawalIntent?: Maybe<EthBankWithdrawalIntent>;
};

/** Autogenerated input type of createEthMigration */
export type CreateEthMigrationInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  nonce: Scalars['String'];
  signature: Scalars['String'];
  weiAmount: Scalars['String'];
};

/** Autogenerated return type of createEthMigration */
export type CreateEthMigrationPayload = {
  __typename?: 'createEthMigrationPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  currentUser?: Maybe<CurrentUser>;
  errors: Array<UserError>;
};

/** Autogenerated input type of createEthVault */
export type CreateEthVaultInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
};

/** Autogenerated return type of createEthVault */
export type CreateEthVaultPayload = {
  __typename?: 'createEthVaultPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  currentUser?: Maybe<CurrentUser>;
  errors: Array<UserError>;
};

/** Autogenerated input type of createFastWithdrawal */
export type CreateFastWithdrawalInput = {
  amount: Scalars['String'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  salt: Scalars['String'];
  /** List of signed LimitOrder objects. */
  starkSignatures: Array<StarkSignatureInput>;
  to: Scalars['String'];
};

/** Autogenerated return type of createFastWithdrawal */
export type CreateFastWithdrawalPayload = {
  __typename?: 'createFastWithdrawalPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  currentUser?: Maybe<CurrentUser>;
  errors: Array<UserError>;
};

/** Autogenerated input type of createOrUpdateSingleBuyOfferMinPrice */
export type CreateOrUpdateSingleBuyOfferMinPriceInput = {
  amount: Scalars['String'];
  cardSlug: Scalars['String'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  isPrivate: Scalars['Boolean'];
};

/** Autogenerated return type of createOrUpdateSingleBuyOfferMinPrice */
export type CreateOrUpdateSingleBuyOfferMinPricePayload = {
  __typename?: 'createOrUpdateSingleBuyOfferMinPricePayload';
  card?: Maybe<Card>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  errors: Array<UserError>;
  singleBuyOfferMinPrice?: Maybe<SingleBuyOfferMinPrice>;
};

/** Autogenerated input type of createOrUpdateSo5Lineup */
export type CreateOrUpdateSo5LineupInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  draft?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  so5Appearances: Array<So5AppearanceInput>;
  so5LeaderboardId: Scalars['ID'];
  so5LineupId?: InputMaybe<Scalars['ID']>;
};

/** Autogenerated return type of createOrUpdateSo5Lineup */
export type CreateOrUpdateSo5LineupPayload = {
  __typename?: 'createOrUpdateSo5LineupPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  currentUser?: Maybe<CurrentUser>;
  errors: Array<UserError>;
  so5Lineup?: Maybe<So5Lineup>;
};

/** Autogenerated input type of createPaymentIntent */
export type CreatePaymentIntentInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  saveCard?: InputMaybe<Scalars['Boolean']>;
  weiAmount?: InputMaybe<Scalars['String']>;
};

/** Autogenerated return type of createPaymentIntent */
export type CreatePaymentIntentPayload = {
  __typename?: 'createPaymentIntentPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  currentUserPaymentMethods?: Maybe<Array<PaymentMethod>>;
  errors: Array<UserError>;
  paymentIntent?: Maybe<PaymentIntent>;
};

/** Autogenerated input type of createSingleBuyOffer */
export type CreateSingleBuyOfferInput = {
  assetId?: InputMaybe<Scalars['String']>;
  cardSlug?: InputMaybe<Scalars['String']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** ID used as unique deal identifier. Consider using `crypto.getRandomValues(new Uint32Array(4)).join()` to generate one. */
  dealId: Scalars['String'];
  price: Scalars['WeiAmount'];
  /** List of signed LimitOrder objects. */
  starkSignatures: Array<StarkSignatureInput>;
};

/** Autogenerated return type of createSingleBuyOffer */
export type CreateSingleBuyOfferPayload = {
  __typename?: 'createSingleBuyOfferPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  errors: Array<UserError>;
  offer?: Maybe<Offer>;
  /** The sport-agnostic offer */
  tokenOffer?: Maybe<TokenOffer>;
};

/** Autogenerated input type of createSingleSaleOffer */
export type CreateSingleSaleOfferInput = {
  assetId?: InputMaybe<Scalars['String']>;
  cardSlug?: InputMaybe<Scalars['String']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** ID used as unique deal identifier. Consider using `crypto.getRandomValues(new Uint32Array(4)).join()` to generate one. */
  dealId: Scalars['String'];
  migrationData?: InputMaybe<OfferMigrationInput>;
  price: Scalars['WeiAmount'];
  /** List of signed LimitOrder objects. */
  starkSignatures: Array<StarkSignatureInput>;
  startDate?: InputMaybe<Scalars['ISO8601DateTime']>;
};

/** Autogenerated return type of createSingleSaleOffer */
export type CreateSingleSaleOfferPayload = {
  __typename?: 'createSingleSaleOfferPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  errors: Array<UserError>;
  offer?: Maybe<SingleSaleOffer>;
  /** The sport-agnostic offer */
  tokenOffer?: Maybe<TokenOffer>;
};

/** Autogenerated input type of createSubscription */
export type CreateSubscriptionInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  interactionContext?: InputMaybe<Scalars['String']>;
  subscribable: SubscribableInput;
};

/** Autogenerated return type of createSubscription */
export type CreateSubscriptionPayload = {
  __typename?: 'createSubscriptionPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  errors: Array<UserError>;
  subscription?: Maybe<EmailSubscription>;
};

/** Autogenerated input type of createWithdrawal */
export type CreateWithdrawalInput = {
  agreedFeeAmount?: InputMaybe<Scalars['String']>;
  amount: Scalars['String'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  dealId: Scalars['String'];
  signature: Scalars['String'];
  to: Scalars['String'];
};

/** Autogenerated return type of createWithdrawal */
export type CreateWithdrawalPayload = {
  __typename?: 'createWithdrawalPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  currentUser?: Maybe<CurrentUser>;
  errors: Array<UserError>;
  withdrawal?: Maybe<Withdrawal>;
};

/** Autogenerated input type of deleteCustomDeck */
export type DeleteCustomDeckInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  deckSlug: Scalars['String'];
};

/** Autogenerated return type of deleteCustomDeck */
export type DeleteCustomDeckPayload = {
  __typename?: 'deleteCustomDeckPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  currentUser?: Maybe<CurrentUser>;
  deck?: Maybe<CustomDeck>;
  errors: Array<UserError>;
};

/** Autogenerated input type of deleteSo5Lineup */
export type DeleteSo5LineupInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  so5LineupId: Scalars['ID'];
};

/** Autogenerated return type of deleteSo5Lineup */
export type DeleteSo5LineupPayload = {
  __typename?: 'deleteSo5LineupPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  errors: Array<UserError>;
  so5Leaderboard: So5Leaderboard;
};

/** Autogenerated input type of deleteSubscription */
export type DeleteSubscriptionInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  slug: Scalars['String'];
};

/** Autogenerated return type of deleteSubscription */
export type DeleteSubscriptionPayload = {
  __typename?: 'deleteSubscriptionPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  errors: Array<UserError>;
  subscribable?: Maybe<Subscribable>;
  subscription?: Maybe<EmailSubscription>;
};

/** Autogenerated input type of deleteUserSo5Lineups */
export type DeleteUserSo5LineupsInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  so5FixtureId: Scalars['ID'];
  so5LeagueIds?: InputMaybe<Array<Scalars['ID']>>;
};

/** Autogenerated return type of deleteUserSo5Lineups */
export type DeleteUserSo5LineupsPayload = {
  __typename?: 'deleteUserSo5LineupsPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  errors: Array<UserError>;
  so5Fixture: So5Fixture;
};

/** Autogenerated input type of destroyAccount */
export type DestroyAccountInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
};

/** Autogenerated return type of destroyAccount */
export type DestroyAccountPayload = {
  __typename?: 'destroyAccountPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  currentUser?: Maybe<CurrentUser>;
  errors: Array<UserError>;
};

/** Autogenerated input type of destroyReferral */
export type DestroyReferralInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  referralId: Scalars['ID'];
};

/** Autogenerated return type of destroyReferral */
export type DestroyReferralPayload = {
  __typename?: 'destroyReferralPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  currentUser?: Maybe<CurrentUser>;
  errors: Array<UserError>;
};

/** Autogenerated input type of detachPaymentMethod */
export type DetachPaymentMethodInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  paymentMethod: Scalars['String'];
};

/** Autogenerated return type of detachPaymentMethod */
export type DetachPaymentMethodPayload = {
  __typename?: 'detachPaymentMethodPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  currentUser: CurrentUser;
  errors: Array<UserError>;
};

/** Autogenerated input type of disable2fa */
export type Disable2faInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
};

/** Autogenerated return type of disable2fa */
export type Disable2faPayload = {
  __typename?: 'disable2faPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  currentUser?: Maybe<CurrentUser>;
  errors: Array<UserError>;
};

/** Autogenerated input type of disconnectOmniauthProvider */
export type DisconnectOmniauthProviderInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  provider: Scalars['String'];
};

/** Autogenerated return type of disconnectOmniauthProvider */
export type DisconnectOmniauthProviderPayload = {
  __typename?: 'disconnectOmniauthProviderPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  errors: Array<UserError>;
  userProfile?: Maybe<UserProfile>;
};

/** Autogenerated input type of editCardInDeck */
export type EditCardInDeckInput = {
  cardSlug: Scalars['String'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  deckSlug: Scalars['String'];
  newIndex: Scalars['Int'];
};

/** Autogenerated return type of editCardInDeck */
export type EditCardInDeckPayload = {
  __typename?: 'editCardInDeckPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  currentUser?: Maybe<CurrentUser>;
  deck?: Maybe<DeckInterface>;
  errors: Array<UserError>;
};

/** Autogenerated input type of editCustomDeck */
export type EditCustomDeckInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  deckSlug: Scalars['String'];
  name: Scalars['String'];
  newIndex?: InputMaybe<Scalars['Int']>;
  visible: Scalars['Boolean'];
};

/** Autogenerated return type of editCustomDeck */
export type EditCustomDeckPayload = {
  __typename?: 'editCustomDeckPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  currentUser?: Maybe<CurrentUser>;
  deck?: Maybe<CustomDeck>;
  errors: Array<UserError>;
};

/** Autogenerated input type of enable2fa */
export type Enable2faInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  otpAttempt: Scalars['String'];
};

/** Autogenerated return type of enable2fa */
export type Enable2faPayload = {
  __typename?: 'enable2faPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  currentUser?: Maybe<CurrentUser>;
  errors: Array<UserError>;
  otpBackupCodes?: Maybe<Array<Scalars['String']>>;
};

/** Autogenerated input type of generateActionRewardPickablePlayers */
export type GenerateActionRewardPickablePlayersInput = {
  actionRewardId: Scalars['ID'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
};

/** Autogenerated return type of generateActionRewardPickablePlayers */
export type GenerateActionRewardPickablePlayersPayload = {
  __typename?: 'generateActionRewardPickablePlayersPayload';
  actionReward?: Maybe<ActionReward>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  currentUser?: Maybe<CurrentUser>;
  errors: Array<UserError>;
};

/** Autogenerated input type of generateOtpBackupCodes */
export type GenerateOtpBackupCodesInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
};

/** Autogenerated return type of generateOtpBackupCodes */
export type GenerateOtpBackupCodesPayload = {
  __typename?: 'generateOtpBackupCodesPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  currentUser?: Maybe<CurrentUser>;
  errors: Array<UserError>;
  otpBackupCodes?: Maybe<Array<Scalars['String']>>;
};

/** Autogenerated input type of markNotificationsAsRead */
export type MarkNotificationsAsReadInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  notificationId?: InputMaybe<Scalars['String']>;
};

/** Autogenerated return type of markNotificationsAsRead */
export type MarkNotificationsAsReadPayload = {
  __typename?: 'markNotificationsAsReadPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  currentUser?: Maybe<CurrentUser>;
  errors: Array<UserError>;
};

/** Autogenerated input type of mintCardsForUsers */
export type MintCardsForUsersInputs = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  intents: Array<MintCardsForUsersInput>;
};

/** Autogenerated return type of mintCardsForUsers */
export type MintCardsForUsersPayload = {
  __typename?: 'mintCardsForUsersPayload';
  cards?: Maybe<Array<Card>>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  errors: Array<UserError>;
};

/** Autogenerated input type of pickActionRewardPlayers */
export type PickActionRewardPlayersInput = {
  actionRewardId: Scalars['ID'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  playerSlugs: Array<Scalars['String']>;
};

/** Autogenerated return type of pickActionRewardPlayers */
export type PickActionRewardPlayersPayload = {
  __typename?: 'pickActionRewardPlayersPayload';
  actionReward?: Maybe<ActionReward>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  currentUser?: Maybe<CurrentUser>;
  errors: Array<UserError>;
};

/** Autogenerated input type of prepareAcceptOffer */
export type PrepareAcceptOfferInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `blockchainId` of the offer to accept. */
  dealId: Scalars['String'];
};

/** Autogenerated return type of prepareAcceptOffer */
export type PrepareAcceptOfferPayload = {
  __typename?: 'prepareAcceptOfferPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  errors: Array<UserError>;
  limitOrders?: Maybe<Array<LimitOrder>>;
};

/** Autogenerated input type of prepareBid */
export type PrepareBidInput = {
  bidAmountWei: Scalars['String'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  englishAuctionId: Scalars['String'];
};

/** Autogenerated return type of prepareBid */
export type PrepareBidPayload = {
  __typename?: 'prepareBidPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  errors: Array<UserError>;
  limitOrders?: Maybe<Array<LimitOrder>>;
};

/** Autogenerated input type of prepareCardWithdrawal */
export type PrepareCardWithdrawalInput = {
  cardSlug: Scalars['String'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  destination?: InputMaybe<Scalars['String']>;
};

/** Autogenerated return type of prepareCardWithdrawal */
export type PrepareCardWithdrawalPayload = {
  __typename?: 'prepareCardWithdrawalPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  errors: Array<UserError>;
  transferRequest?: Maybe<TransferRequest>;
};

/** Autogenerated input type of prepareEthDeposit */
export type PrepareEthDepositInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  weiAmount: Scalars['WeiAmount'];
};

/** Autogenerated return type of prepareEthDeposit */
export type PrepareEthDepositPayload = {
  __typename?: 'prepareEthDepositPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  errors: Array<UserError>;
  ethDeposit?: Maybe<EthDeposit>;
};

/** Autogenerated input type of prepareOffer */
export type PrepareOfferInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  receiveAssetIds?: InputMaybe<Array<Scalars['String']>>;
  receiveCardsSlugs?: InputMaybe<Array<Scalars['String']>>;
  receiveWeiAmount: Scalars['WeiAmount'];
  receiverSlug?: InputMaybe<Scalars['String']>;
  sendAssetIds?: InputMaybe<Array<Scalars['String']>>;
  sendCardsSlugs?: InputMaybe<Array<Scalars['String']>>;
  sendWeiAmount: Scalars['WeiAmount'];
  type?: InputMaybe<OfferType>;
};

/** Autogenerated return type of prepareOffer */
export type PrepareOfferPayload = {
  __typename?: 'prepareOfferPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  errors: Array<UserError>;
  /** List of LimitOrder objects used as payload to sign for the `createSingleSaleOffer`, `createDirectOffer` or `createSingleBuyOffer` mutations. */
  limitOrders?: Maybe<Array<LimitOrder>>;
};

/** Autogenerated input type of prepareTokenDeposit */
export type PrepareTokenDepositInput = {
  assetId: Scalars['String'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
};

/** Autogenerated return type of prepareTokenDeposit */
export type PrepareTokenDepositPayload = {
  __typename?: 'prepareTokenDepositPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  errors: Array<UserError>;
  tokenDeposit?: Maybe<TokenDeposit>;
};

/** Autogenerated input type of rejectOffer */
export type RejectOfferInput = {
  block?: InputMaybe<Scalars['Boolean']>;
  blockchainId: Scalars['String'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
};

/** Autogenerated return type of rejectOffer */
export type RejectOfferPayload = {
  __typename?: 'rejectOfferPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  errors: Array<UserError>;
  offer?: Maybe<Offer>;
  /** The sport-agnostic offer */
  tokenOffer?: Maybe<TokenOffer>;
};

/** Autogenerated input type of relayCall */
export type RelayCallInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  encodedFunction: Scalars['String'];
  extraGas: Scalars['Int'];
  signature: Scalars['String'];
};

/** Autogenerated return type of relayCall */
export type RelayCallPayload = {
  __typename?: 'relayCallPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  currentUser: CurrentUser;
  errors: Array<UserError>;
  transaction?: Maybe<EthereumTransaction>;
};

/** Autogenerated input type of removeCardFromDeck */
export type RemoveCardFromDeckInput = {
  cardSlug: Scalars['String'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  deckSlug: Scalars['String'];
};

/** Autogenerated return type of removeCardFromDeck */
export type RemoveCardFromDeckPayload = {
  __typename?: 'removeCardFromDeckPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  currentUser?: Maybe<CurrentUser>;
  deck?: Maybe<DeckInterface>;
  errors: Array<UserError>;
};

/** Autogenerated input type of requestReceipt */
export type RequestReceiptInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  paymentId: Scalars['ID'];
};

/** Autogenerated return type of requestReceipt */
export type RequestReceiptPayload = {
  __typename?: 'requestReceiptPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  errors: Array<UserError>;
  payment?: Maybe<Payment>;
};

/** Autogenerated input type of resetPrivateKey */
export type ResetPrivateKeyInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  starkKey?: InputMaybe<Scalars['String']>;
};

/** Autogenerated return type of resetPrivateKey */
export type ResetPrivateKeyPayload = {
  __typename?: 'resetPrivateKeyPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  currentUser: CurrentUser;
  errors: Array<UserError>;
};

/** Autogenerated input type of resumeOnboarding */
export type ResumeOnboardingInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
};

/** Autogenerated return type of resumeOnboarding */
export type ResumeOnboardingPayload = {
  __typename?: 'resumeOnboardingPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  currentUser?: Maybe<CurrentUser>;
  errors: Array<UserError>;
};

/** Autogenerated input type of setDeviceToken */
export type SetDeviceTokenInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  devicePlatform: Scalars['String'];
  deviceToken: Scalars['String'];
  disable?: InputMaybe<Scalars['Boolean']>;
};

/** Autogenerated return type of setDeviceToken */
export type SetDeviceTokenPayload = {
  __typename?: 'setDeviceTokenPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  errors: Array<UserError>;
};

/** Autogenerated input type of signIn */
export type SignInInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  deviceFingerprint?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  gaClientId?: InputMaybe<Scalars['String']>;
  otpAttempt?: InputMaybe<Scalars['String']>;
  otpSessionChallenge?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

/** Autogenerated return type of signIn */
export type SignInPayload = {
  __typename?: 'signInPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  currentUser?: Maybe<CurrentUser>;
  errors: Array<UserError>;
  otpSessionChallenge?: Maybe<Scalars['String']>;
  /** tcuToken is returned when the user must accept the TCUs before signing in */
  tcuToken?: Maybe<Scalars['String']>;
};

/** Autogenerated input type of signUp */
export type SignUpInput = {
  acceptGameRules?: InputMaybe<Scalars['Boolean']>;
  acceptPrivacyPolicy?: InputMaybe<Scalars['Boolean']>;
  acceptTerms?: InputMaybe<Scalars['Boolean']>;
  agreedToReceiveOffersFromPartners?: InputMaybe<Scalars['Boolean']>;
  certified?: InputMaybe<Scalars['String']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  /** The path the new User is from (to be used to redirect him after email confirmation) */
  fromPath?: InputMaybe<Scalars['String']>;
  gaClientId?: InputMaybe<Scalars['String']>;
  impactClickId?: InputMaybe<Scalars['String']>;
  nickname: Scalars['String'];
  password: Scalars['String'];
  recaptchaToken: Scalars['String'];
  referrer?: InputMaybe<Scalars['String']>;
  sorareAddress: Scalars['String'];
  sorarePrivateKey: SorarePrivateKeyAttributes;
  sorarePrivateKeyBackup: Scalars['String'];
  starkKey?: InputMaybe<Scalars['String']>;
  utmParams?: InputMaybe<UtmInput>;
};

/** Autogenerated return type of signUp */
export type SignUpPayload = {
  __typename?: 'signUpPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  currentUser?: Maybe<CurrentUser>;
  errors: Array<UserError>;
};

/** Autogenerated input type of skipOnboarding */
export type SkipOnboardingInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
};

/** Autogenerated return type of skipOnboarding */
export type SkipOnboardingPayload = {
  __typename?: 'skipOnboardingPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  currentUser?: Maybe<CurrentUser>;
  errors: Array<UserError>;
};

/** Autogenerated input type of unblockUserOffers */
export type UnblockUserOffersInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  userSlug: Scalars['String'];
};

/** Autogenerated return type of unblockUserOffers */
export type UnblockUserOffersPayload = {
  __typename?: 'unblockUserOffersPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  currentUser?: Maybe<CurrentUser>;
};

/** Autogenerated input type of updateSubscription */
export type UpdateSubscriptionInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  enabled: Scalars['Boolean'];
  rarities: Array<Scalars['String']>;
  slug: Scalars['String'];
};

/** Autogenerated return type of updateSubscription */
export type UpdateSubscriptionPayload = {
  __typename?: 'updateSubscriptionPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  errors: Array<UserError>;
  subscribable?: Maybe<Subscribable>;
  subscription?: Maybe<EmailSubscription>;
};

/** Autogenerated input type of updateUserProfile */
export type UpdateUserProfileInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  clubBannerId?: InputMaybe<Scalars['ID']>;
  clubName?: InputMaybe<Scalars['String']>;
  clubShieldId?: InputMaybe<Scalars['ID']>;
  nickname?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['File']>;
  status?: InputMaybe<Scalars['String']>;
};

/** Autogenerated return type of updateUserProfile */
export type UpdateUserProfilePayload = {
  __typename?: 'updateUserProfilePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  errors: Array<UserError>;
  userProfile?: Maybe<UserProfile>;
};

/** Autogenerated input type of updateUserSettings */
export type UpdateUserSettingsInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  currency?: InputMaybe<Currency>;
  fiatCurrency?: InputMaybe<FiatCurrency>;
  hideBalance?: InputMaybe<Scalars['Boolean']>;
  lastWeb3Provider?: InputMaybe<Scalars['String']>;
  lifecycle?: InputMaybe<UserLifecycleInput>;
  locale?: InputMaybe<Scalars['String']>;
  notificationPreference?: InputMaybe<NotificationPreferenceInput>;
};

/** Autogenerated return type of updateUserSettings */
export type UpdateUserSettingsPayload = {
  __typename?: 'updateUserSettingsPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  errors: Array<UserError>;
  userSettings?: Maybe<UserSettings>;
};

/** Autogenerated input type of verifyPhoneNumber */
export type VerifyPhoneNumberInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  phoneNumber: Scalars['String'];
};

/** Autogenerated return type of verifyPhoneNumber */
export type VerifyPhoneNumberPayload = {
  __typename?: 'verifyPhoneNumberPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  currentUser?: Maybe<CurrentUser>;
  errors: Array<UserError>;
};

export type GetCardQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type GetCardQuery = { __typename?: 'Query', card: { __typename?: 'Card', age?: number | null, grade: number, name: string, pictureUrl?: string | null, position: string, rarity: string, cardEdition?: { __typename?: 'CardEdition', name: string } | null, player: { __typename?: 'Player', displayName: string, pictureUrl?: string | null, country: { __typename?: 'Country', slug: string } }, season: { __typename?: 'Season', name: string, startYear: number }, team: { __typename?: 'Club', name: string, pictureUrl?: string | null } | { __typename?: 'NationalTeam' } } };


export const GetCardDocument = gql`
    query GetCard($slug: String!) {
  card(slug: $slug) {
    age
    cardEdition {
      name
    }
    grade
    name
    pictureUrl(derivative: "tinified")
    player {
      country {
        slug
      }
      displayName
      pictureUrl(derivative: "tinified")
    }
    position
    rarity
    season {
      name
      startYear
    }
    team {
      ... on Club {
        name
        pictureUrl(derivative: "tinified")
      }
    }
  }
}
    `;

/**
 * __useGetCardQuery__
 *
 * To run a query within a React component, call `useGetCardQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCardQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCardQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGetCardQuery(baseOptions: Apollo.QueryHookOptions<GetCardQuery, GetCardQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCardQuery, GetCardQueryVariables>(GetCardDocument, options);
      }
export function useGetCardLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCardQuery, GetCardQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCardQuery, GetCardQueryVariables>(GetCardDocument, options);
        }
export type GetCardQueryHookResult = ReturnType<typeof useGetCardQuery>;
export type GetCardLazyQueryHookResult = ReturnType<typeof useGetCardLazyQuery>;
export type GetCardQueryResult = Apollo.QueryResult<GetCardQuery, GetCardQueryVariables>;
