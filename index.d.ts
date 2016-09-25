// Type definitions for node-transmission
// Project: https://github.com/FLYBYME/node-transmission
// Definitions by: Ronnie Laugen <https://github.com/yusijs>
// Definitions: https://github.com/yusijs/node-transmission-typings

declare module "transmission" {


        namespace Transmission {

                interface setupOptions { host?: string, port?: number, username?: string, password?: string, url?: string }
                interface options {
                        [propName: string]: string
                }

                interface setTorrentOptions {
                        bandwidthPriority?: string
                        downloadLimit?: number
                        downloadLimited?: boolean
                        'files-wanted'?: string[]
                        'files-unwanted'?: string[]
                        honorsSessionLimits?: boolean
                        ids?: number[]
                        location?: string
                        'peer-limit'?: number
                        'priority-high'?: number[]
                        'priority-low'?: number[]
                        'priority-normal'?: number[]
                        seedRatioLimit?: number
                        seedRatioMode?: number
                        uploadLimit?: number
                        uploadLimited?: boolean
                }

                interface setSessionOptions {
                        'start-added-torrents': boolean
                        'alt-speed-down': boolean
                        'alt-speed-enabled': boolean
                        'alt-speed-time-begin': boolean
                        'alt-speed-time-enabled': boolean
                        'alt-speed-time-end': boolean
                        'alt-speed-time-day': boolean
                        'alt-speed-up': boolean
                        'blocklist-enabled': boolean
                        'dht-enabled': boolean
                        encryption: boolean
                        'download-dir': boolean
                        'peer-limit-global': boolean
                        'peer-limit-per-torrent': boolean
                        'pex-enabled': boolean
                        'peer-port': boolean
                        'peer-port-random-on-start': boolean
                        'port-forwarding-enabled': boolean
                        seedRatioLimit: boolean
                        seedRatioLimited: boolean
                        'speed-limit-down': boolean
                        'speed-limit-down-enabled': boolean
                        'speed-limit-up': boolean
                        'speed-limit-up-enabled': boolean
                }

                interface peersFrom {
                        "fromCache": number,
                        "fromDht": number,
                        "fromIncoming": number,
                        "fromLpd": number,
                        "fromLtep": number,
                        "fromPex": number,
                        "fromTracker": number
                }

                interface torrentInfo {
                        activityDate: number
                        addedDate: number
                        bandwidthPriority: number
                        comment: string
                        corruptEver: number
                        creator: string
                        dateCreated: number
                        desiredAvailable: number
                        doneDate: number
                        downloadDir: string
                        downloadedEver: number
                        downloadLimit: number
                        downloadLimited: boolean
                        error: number
                        errorString: string
                        eta: number
                        etaIdle: number
                        files: files[]
                        fileStats: fileStats[]
                        hashString: string
                        haveUnchecked: number
                        haveValid: number
                        honorsSessionLimits: boolean
                        id: number
                        isFinished: boolean
                        isPrivate: boolean
                        isStalled: boolean
                        leftUntilDone: number
                        magnetLink: string
                        manualAnnounceTime: number
                        maxConnectedPeers: number
                        metadataPercentComplete: number
                        name: string
                        "peer-limit": number
                        peers: any[]
                        peersConnected: number
                        peersFrom: peersFrom
                        peersGettingFromUs: number
                        peersSendingToUs: number
                        percentDone: number
                        pieces: string
                        pieceCount: number
                        pieceSize: number
                        'priorities': number[]
                        'rateDownload': number
                        'rateUpload': number
                        'recheckProgress': string
                        'seedIdleLimit': number
                        'seedIdleMode': string
                        'seedRatioLimit': number
                        'seedRatioMode': string
                        'sizeWhenDone': number
                        'startDate': string
                        'status': string
                        'trackers': trackers[]
                        'trackerStats': trackerStats[]
                        'totalSize': number
                        'torrentFile': string
                        'uploadedEver': number
                        'uploadLimit': number
                        'uploadLimited': string
                        'uploadRatio': number
                        'wanted': number[]
                        'webseeds': any[]
                        'webseedsSendingToUs': number
                }

                interface fileStats {
                        bytesCompleted: number
                        priority: number
                        wanted: boolean
                }

                interface files {
                        bytesCompleted: number
                        length: number
                        name: string
                }

                interface trackers {
                        announce: string
                        id: number
                        scrape: string
                        tier: number
                }

                interface trackerStats {
                        "announce": string
                        "announceState": number,
                        "downloadCount": number,
                        "hasAnnounced": boolean,
                        "hasScraped": boolean,
                        "host": string,
                        "id": number,
                        "isBackup": boolean,
                        "lastAnnouncePeerCount": number,
                        "lastAnnounceResult": string,
                        "lastAnnounceStartTime": number,
                        "lastAnnounceSucceeded": boolean,
                        "lastAnnounceTime": number,
                        "lastAnnounceTimedOut": boolean,
                        "lastScrapeResult": string,
                        "lastScrapeStartTime": number,
                        "lastScrapeSucceeded": boolean,
                        "lastScrapeTime": number,
                        "lastScrapeTimedOut": number,
                        "leecherCount": number,
                        "nextAnnounceTime": number,
                        "nextScrapeTime": number,
                        "scrape": string,
                        "scrapeState": number,
                        "seederCount": number,
                        "tier": number
                }

                interface results {
                        torrents?: torrentInfo[],
                        id?: number
                        name?: string
                        hashString?: string
                        [propName: string]: any
                }
        }

        type callback = (err: Error, results: Transmission.results) => void;

        class Transmission {
                constructor(setupOptions: Transmission.setupOptions)

                /**
                 * Set properties for a torrent. You must provide one or more ids.
                 * According to the rpc-spec, transmission will not respond a success argument. Only error.
                 * @param ids an array of torrent IDs to set properties for
                 * @param options options as defined by the RCP spec @ https://trac.transmissionbt.com/browser/trunk/extras/rpc-spec.txt
                 */
                set(ids: number[] | number, options: Transmission.setTorrentOptions, callback: callback): void;

                /**
                 * Add a torrent from a local file
                 * According to the rpc-spec, transmission will not respond a success argument. Only error.
                 * @param filePath string describing where the file is located
                 * @param options (optional) options as defined by the RCP spec @ https://trac.transmissionbt.com/browser/trunk/extras/rpc-spec.txt
                 */

                addFile(filePath: string, options: Transmission.options, callback: callback): void;
                addFile(filePath: string, callback: callback): void;


                /**
                 * Add a torrent from an external URL
                 * According to the rpc-spec, transmission will not respond a success argument. Only error.
                 * @param filePath string describing where the file is located
                 * @param options (optional) options as defined by the RCP spec @ https://trac.transmissionbt.com/browser/trunk/extras/rpc-spec.txt
                 */
                addUrl(url: string, options: Transmission.options, callback: callback): void;
                addUrl(url: string, callback: callback): void;

                /**
                 * Remove torrent
                 * According to the rpc-spec, transmission will not respond a success argument. Only error.
                 * @param ids an array of torrent IDs or a single torrent ID to remove
                 * @param del deletes local data if true
                 */
                remove(ids: number[] | number, del: boolean, callback: callback): void;
                remove(ids: number[] | number, callback: callback): void;

                /**
                 * List torrents with current activity (upload / download / checking)
                 * According to the rpc-spec, transmission will not respond a success argument. Only error.
                 */
                active(callback: callback): void;

                /**
                 * Get information about a torrent. All torrents are returned if ids is omitted
                 * According to the rpc-spec, transmission will not respond a success argument. Only error.
                 * @param ids (optional) an array of torrent IDs or a single torrent ID to get info for. If omitted, returns for all torrents
                 */
                get(callback: callback): void;
                get(ids: number[] | number, callback: callback): void;

                /**
                 * Stop / Pause torrent(s)
                 * According to the rpc-spec, transmission will not respond a success argument. Only error.
                 * @param ids an array of torrent IDs or a single torrent ID to stop
                 */
                stop(ids: number[] | number, callback: callback): void;


                /**
                 * Start / resume torrent
                 * According to the rpc-spec, transmission will not respond a success argument. Only error.
                 * @param ids an array of torrent IDs or a single torrent ID to start
                 * @param del deletes local data if true
                 *
                 * */
                start(ids: number[] | number, callback: callback): void;


                /**
                 * Start / resume torrent, and bypass waiting queue
                 * According to the rpc-spec, transmission will not respond a success argument. Only error.
                 * @param ids an array of torrent IDs or a single torrent ID to start
                 */
                startNow(ids: number[] | number, callback: callback): void;


                /**
                 * Verify torrent integrity
                 * According to the rpc-spec, transmission will not respond a success argument. Only error.
                 * @param ids an array of torrent IDs or a single torrent ID to verify
                 */
                verify(ids: number[] | number, callback: callback): void;


                /**
                 * Reannounce tracker
                 * According to the rpc-spec, transmission will not respond a success argument. Only error.
                 * @param ids an array of torrent IDs or a single torrent ID to reannounce
                 */
                reannounce(ids: number[] | number, callback: callback): void;

                /**
                 * Get client session information
                 */
                session(callback: callback): void;

                /**
                 * Set session information
                 * According to the rpc-spec, transmission will not respond a success argument. Only error.
                 * @param options (optional) options as defined by the RCP spec @ https://trac.transmissionbt.com/browser/trunk/extras/rpc-spec.txt
                 */
                session(options: Transmission.setSessionOptions, callback: callback): void;

                /**
                 * Get session statistics
                 */
                sessionStats(callback: callback): void;
        }





        export = Transmission
}