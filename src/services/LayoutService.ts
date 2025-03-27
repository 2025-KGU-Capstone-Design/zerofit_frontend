import {useMemo} from "react";

export class LayoutService {

    fetchLayout = async (): Promise<string> => "fetchLayout"
}

export function useLayoutService(): LayoutService {
    return useMemo(() => new LayoutService(), [])
}