import environments from './environments';

export default function () {
  return {
    isGlobal: true,
    envFilePath: environments[process.env.NODE_ENV] || '.env',
  };
}
