function getEnvVarOrThrowErr(variableName: string): string {
    const value = import.meta.env[variableName]
    if (value === undefined) {
        throw new Error(`Environment variable ${variableName} is not defined`);
    }
    return value;
}

export default getEnvVarOrThrowErr;
